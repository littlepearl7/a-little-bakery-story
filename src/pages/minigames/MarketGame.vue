<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { art, artStatus } from '../../data';
import { state, availableProducts, priceOf, marketDemand, serveMarketCustomer, leaveMarketCustomer, startMarketGame, restockMarket, displayProductName, save } from '../../store';
import MiniShell from './MiniShell.vue';

const emit=defineEmits(['exit']);
const phase=ref('intro');
const message=ref('');
const alloc=ref({});
const stand=ref(['','','']);
const chosen=ref('');
const remaining=ref(90);
let clock;
const run=computed(()=>state.marketRun);
const demand=computed(()=>marketDemand());
const goods=computed(()=>Object.entries(run.value?.inventory||{}).map(([id,qty])=>({id,qty,price:priceOf(id)})));
const restockable=computed(()=>goods.value.filter(g=>(state.shelf[g.id]||0)>g.qty));
const cakes=computed(()=>availableProducts.value.filter(p=>(state.shelf[p.id]||0)>0));
const theme=computed(()=>['春日甜品市集','夏日水果节','秋日丰收集市','冬日暖心甜品节'][Math.floor((state.month-1)%12/3)]);
const cakeArt=id=>artStatus(`cake-${id}.webp`)==='ok'?art(`cake-${id}.webp`):'';
const sold=computed(()=>run.value?.sold||0);
const revenue=computed(()=>run.value?.revenue||0);
const satisfied=computed(()=>run.value?Math.round(run.value.score/Math.max(1,run.value.customerIndex)*100):100);

function ready(){
  if(state.marketRun&&!state.marketRun.completed){phase.value='play';startClock(true);return;}
  phase.value='prep';
  alloc.value=Object.fromEntries(cakes.value.map(p=>[p.id,Math.min(2,state.shelf[p.id]||0)]));
  stand.value=['','',''];chosen.value='';
}
function adjust(id,delta){alloc.value={...alloc.value,[id]:Math.max(0,Math.min(state.shelf[id]||0,(alloc.value[id]||0)+delta))};}
function slot(i){if(!chosen.value)return message.value='先点选上方商品，再点击希望摆放的摊位位置。';stand.value[i]=chosen.value;message.value='展示位置已安排，可继续调整。';}
function begin(){
  const inventory=Object.fromEntries(Object.entries(alloc.value).filter(([,n])=>n>0));
  if(!Object.keys(inventory).length)return message.value='至少带一款蛋糕去市集。';
  if(!stand.value.some(id=>id&&inventory[id]))return message.value='先将商品布置到至少一个摊位展示位置。';
  if(Object.keys(inventory).some(id=>!stand.value.includes(id)))return message.value='调拨的每种蛋糕都必须放到展示位置（最多三款），请调整备货。';
  const r=startMarketGame({inventory,theme:theme.value});
  if(!r.ok)return message.value=r.message;
  const active=state.marketRun;
  active.stand=stand.value.filter(id=>inventory[id]);
  active.endsAt=Date.now()+90000;
  save();
  phase.value='play';message.value='市集开张！看清客人需要的口味与数量。';startClock();
}
function startClock(resume=false){
  clearInterval(clock);
  if(!run.value?.endsAt){run.value.endsAt=Date.now()+90000;save();}
  clock=setInterval(()=>{
    remaining.value=Math.max(0,Math.ceil((run.value?.endsAt-Date.now())/1000));
    if(remaining.value<=0){clearInterval(clock);while(state.marketRun&&!state.marketRun.completed)leaveMarketCustomer();phase.value='result';message.value='活动时间结束，收摊结算。';}
  },250);
  remaining.value=Math.max(0,Math.ceil((run.value.endsAt-Date.now())/1000));
  if(resume&&remaining.value<=0){while(state.marketRun&&!state.marketRun.completed)leaveMarketCustomer();phase.value='result';}
}
function sell(id){
  if(phase.value!=='play'||!demand.value)return;
  const r=serveMarketCustomer(id);message.value=r.message;
  if(run.value.completed){clearInterval(clock);phase.value='result';}
}
function replenish(id){const r=restockMarket(id);message.value=r.message;}
function skip(){leaveMarketCustomer();message.value='客人没有买到想要的蛋糕，满意度降低。';if(run.value.completed){clearInterval(clock);phase.value='result';}}
onMounted(()=>{if(state.marketRun&&!state.marketRun.completed){phase.value='intro';message.value='发现上次未结束的市集，可继续营业。';}});
onUnmounted(()=>clearInterval(clock));
</script>

<template>
  <MiniShell bg="minigame-market" title="小镇市集" :sub="phase==='play'?theme+' · 剩余 '+remaining+' 秒':theme" @exit="emit('exit')">
    <div v-if="phase==='play' && demand" class="game-banner"><b>{{demand.customer}}</b>：想买 <b>{{displayProductName(demand.product)}}</b> × {{demand.qty}} 份！<br><small>营业额 ¥{{revenue}} · 销量 {{sold}} · 满意度 {{satisfied}}%</small></div>
    <div class="game-scroll">
      <div v-if="phase==='intro'" class="game-card"><h3 class="game-title">{{theme}}</h3><p class="game-lead">先从店内库存调拨蛋糕，再安排摊位展示位置。开张后需要在 90 秒内接待顾客，错卖会影响满意度。</p><div class="game-stats"><span>今日货架 {{Object.values(state.shelf).reduce((a,b)=>a+b,0)}} 份</span><span>本月活动积分 {{state.marketPoints||0}}</span></div><p v-if="message" class="game-message">{{message}}</p><button class="game-btn primary" type="button" style="width:100%;margin-top:8px" @click="ready">{{run&&!run.completed?'继续市集':'准备市集商品'}}</button></div>

      <div v-if="phase==='prep'" class="game-card"><h3 class="game-title">备货与布置摊位</h3><p class="game-lead">调拨数量不能超过主店真实库存。展示位置会影响实际可售商品，点击商品再点位置进行陈列。</p>
        <div class="game-section">① 选择调拨数量</div><div v-for="p in cakes" :key="p.id" class="game-row"><span>{{displayProductName(p.id)}} · 现货 {{state.shelf[p.id]}}</span><div class="game-row"><button class="game-btn" type="button" @click="adjust(p.id,-1)">−</button><b>{{alloc[p.id]||0}}</b><button class="game-btn" type="button" @click="adjust(p.id,1)">＋</button></div></div>
        <div class="game-section">② 选择陈列商品</div><div class="game-grid"><button v-for="p in cakes.filter(x=>alloc[x.id]>0)" :key="p.id" type="button" class="game-btn game-tile" :class="{selected:chosen===p.id}" @click="chosen=p.id"><img v-if="cakeArt(p.id)" :src="cakeArt(p.id)" alt=""><small>{{displayProductName(p.id)}}</small></button></div>
        <div class="game-section">③ 放入三个展示位置</div><div class="game-grid"><button v-for="(id,i) in stand" :key="i" class="game-btn" type="button" @click="slot(i)">位置 {{i+1}}<br>{{id?displayProductName(id):'点击放置'}}</button></div>
        <button class="game-btn primary" type="button" style="width:100%" @click="begin">布置完成 · 开始营业</button>
      </div>

      <div v-if="phase==='play'" class="game-card"><h3 class="game-title">摊位销售 · {{run?.customerIndex+1}} / {{run?.demands.length}}</h3><p class="game-lead">按需求点击展示台上的蛋糕，系统会自动检查数量、收款并从现货扣除。</p>
        <div class="game-grid"><button v-for="id in [...new Set(run?.stand || Object.keys(run?.inventory||{}))]" :key="id" type="button" class="game-btn game-tile" :disabled="!(run?.inventory?.[id]>0)" @click="sell(id)"><img v-if="cakeArt(id)" :src="cakeArt(id)" alt=""><span>{{displayProductName(id)}}</span><small>摊位 {{run?.inventory?.[id]||0}} 份</small></button></div>
        <div class="game-section">补货 · 从主店调拨（运费 ¥5/份）</div><div class="game-grid"><button v-for="g in restockable" :key="g.id" class="game-btn" type="button" @click="replenish(g.id)">＋ {{displayProductName(g.id)}}</button><span v-if="!restockable.length" class="game-lead">店里没有剩余现货可调拨。</span></div>
        <button class="game-btn" style="width:100%" type="button" @click="skip">无法满足 · 放弃这笔订单</button>
      </div>

      <div v-if="phase==='result'" class="game-card"><h3 class="game-title">市集收摊 · {{run?.score >= (run?.target||99)?'达成目标':'继续努力'}}</h3><div class="game-stats"><span>卖出 {{sold}} 份</span><span>活动收入 ¥{{revenue}}</span><span>成交顾客 {{run?.score||0}} 位</span><span>失误 {{run?.misses||0}} 次</span><span>目标 {{run?.target||0}} 单</span><span>活动积分 {{state.marketPoints||0}}</span></div><p class="game-lead">销售与库存已同步到主店，活动记录已存入收藏系统。</p><button class="game-btn primary" style="width:100%" type="button" @click="emit('exit')">回到小镇</button></div>
      <div v-if="message && phase!=='intro'" class="game-message">{{message}}</div>
    </div>
  </MiniShell>
</template>
