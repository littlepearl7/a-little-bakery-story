<script setup>
import { computed, ref } from 'vue';
import { art, artStatus } from '../../data';
import { state, availableProducts, priceOf, cafeDemand, serveCafeCustomer, leaveCafeCustomer, startCafeGame, displayProductName, save } from '../../store';
import MiniShell from './MiniShell.vue';

const emit=defineEmits(['exit']);
const COFFEES=[{id:'americano',name:'美式咖啡',profile:'bold',note:'深烘浓香'},{id:'latte',name:'拿铁',profile:'mellow',note:'温柔奶香'},{id:'cappuccino',name:'卡布奇诺',profile:'mellow',note:'绵密奶泡'},{id:'mocha',name:'摩卡',profile:'bold',note:'巧克力香'},{id:'iced',name:'冰咖啡',profile:'fresh',note:'清爽明亮'}];
const PROFILE={plain:'mellow',strawberry:'mellow',chocolate:'bold',taro:'bold',matcha:'fresh',mango:'fresh',tiramisu:'bold',fig:'fresh',seasonal:'fresh',custom:'mellow',festival:'bold',signature:'bold'};
const WORDS={bold:'浓郁醇厚',mellow:'温柔奶香',fresh:'轻盈清爽'};
const phase=ref('intro');
const selectedCake=ref('');
const selectedCoffee=ref('latte');
const price=ref(0);
const title=ref('');
const pack=ref('奶油白礼盒');
const message=ref('');
const run=computed(()=>state.cafeRun);
const demand=computed(()=>cafeDemand());
const cakes=computed(()=>availableProducts.value.map(p=>({...p,stock:state.shelf[p.id]||0})).filter(p=>p.stock>0));
const coffee=computed(()=>COFFEES.find(x=>x.id===selectedCoffee.value));
const theme=computed(()=>['春日花园下午茶','夏日水果特调','秋日暖心咖啡','冬日巧克力时光'][Math.floor((state.month-1)%12/3)]);
const paired=computed(()=>selectedCake.value && PROFILE[selectedCake.value]===coffee.value.profile);
const fair=computed(()=>selectedCake.value?Math.round(priceOf(selectedCake.value)*1.25+65):0);
const cakeArt=id=>artStatus(`cake-${id}.webp`)==='ok'?art(`cake-${id}.webp`):'';
function setup(){
  if(run.value&&!run.value.completed){phase.value='play';selectedCake.value=run.value.menu.product;selectedCoffee.value=run.value.menu.coffee;return;}
  phase.value='setup';message.value='选择真实库存里的蛋糕，再设计咖啡、售价和包装。';
}
function cake(id){selectedCake.value=id;if(!price.value)price.value=Math.round(priceOf(id)*1.2+18);}
function begin(){
  if(!selectedCake.value)return message.value='请先选择一款有库存的蛋糕。';
  if(!paired.value)return message.value='口味冲突：尝试把清爽蛋糕搭配冰咖啡、浓郁蛋糕搭配美式或摩卡。';
  if(price.value<1 || !Number.isFinite(Number(price.value)))return message.value='请输入有效套餐价格。';
  const r=startCafeGame({product:selectedCake.value,coffee:selectedCoffee.value,price:price.value,theme:theme.value});
  if(!r.ok)return message.value=r.message;
  state.cafeRun.menu.name=String(title.value||`${displayProductName(selectedCake.value)}下午茶`).slice(0,20);
  state.cafeRun.menu.packing=pack.value;
  save();
  phase.value='play';message.value='套餐开始营业。根据顾客口味要求，随时调整组合。';
}
function serve(){
  if(!selectedCake.value)return message.value='先为顾客选择蛋糕。';
  const r=serveCafeCustomer({product:selectedCake.value,coffee:selectedCoffee.value});
  message.value=r.message;
  if(run.value.completed){phase.value='result';return;}
  if(r.ok){selectedCake.value='';selectedCoffee.value='latte';}
}
function skip(){leaveCafeCustomer();message.value='这位客人暂时没能买到喜欢的组合。';if(run.value.completed)phase.value='result';}
function discount(){if(run.value?.menu){run.value.menu.price=Math.max(1,run.value.menu.price-10);save();message.value='本次套餐售价已下调 ¥10。';}}
</script>

<template>
  <MiniShell bg="minigame-cafe" title="咖啡店联名" :sub="phase==='play'?'已接待 '+(run?.customerIndex||0)+' / 3 位客人':theme" @exit="emit('exit')">
    <div v-if="phase==='play'&&demand" class="game-banner"><b>{{demand.customer}}</b>：想要一份<b>{{WORDS[demand.profile]}}</b>的蛋糕和咖啡搭配。<br><small>今日联名收益 ¥{{run?.revenue||0}} · 客人偏好明确，请仔细搭配</small></div>
    <div class="game-scroll">
      <div v-if="phase==='intro'" class="game-card"><h3 class="game-title">{{theme}}</h3><p class="game-lead">和咖啡店联合设计套餐，先选蛋糕、咖啡与价格，营业时根据三位顾客的喜好重新搭配。每笔成交都会扣除店内蛋糕，并计算咖啡制作成本。</p><div class="game-stats"><span>合作经验 {{state.cafeCollab}}</span><span>可用蛋糕 {{cakes.reduce((a,b)=>a+b.stock,0)}} 份</span></div><p v-if="message" class="game-message">{{message}}</p><button class="game-btn primary" style="width:100%;margin-top:8px" type="button" @click="setup">{{run&&!run.completed?'继续联名活动':'设计联名套餐'}}</button></div>

      <div v-if="phase==='setup'||phase==='play'" class="game-card"><h3 class="game-title">{{phase==='setup'?'① 设计联名组合':'挑选这位客人的套餐'}}</h3>
        <div class="game-section">左侧蛋糕 · 来自店铺实际库存</div><div class="game-grid four"><button v-for="p in cakes" :key="p.id" type="button" class="game-btn game-tile" :class="{selected:selectedCake===p.id}" @click="cake(p.id)"><img v-if="cakeArt(p.id)" :src="cakeArt(p.id)" alt=""><span>{{displayProductName(p.id)}}</span><small>库存 {{p.stock}}</small></button></div>
        <div class="game-section">右侧咖啡</div><div class="game-grid"><button v-for="c in COFFEES" :key="c.id" type="button" class="game-btn" :class="{selected:selectedCoffee===c.id}" @click="selectedCoffee=c.id">{{c.name}}<br><small>{{c.note}}</small></button></div>
        <div class="game-row"><strong>中央组合区域</strong><span>{{paired?'✓ 风味协调':'尚需调整搭配'}}</span></div><div class="game-stats"><span>{{selectedCake?displayProductName(selectedCake):'尚未选蛋糕'}}</span><span>＋ {{coffee.name}}</span></div>
        <template v-if="phase==='setup'"><div class="game-section">② 套餐命名、价格与包装</div><input class="name-input" v-model="title" maxlength="20" placeholder="套餐名称（可选）"><div class="game-row"><span>定价（建议不高于 ¥{{fair}}）</span><input class="game-number" type="number" min="1" inputmode="numeric" v-model.number="price"></div><div class="game-grid two"><button v-for="v in ['奶油白礼盒','樱花粉丝带','鼠尾草绿礼盒','焦糖色纸袋']" :key="v" type="button" class="game-btn" :class="{selected:pack===v}" @click="pack=v">{{v}}</button></div><button class="game-btn primary" style="width:100%" type="button" @click="begin">确认套餐 · 开始联名</button></template>
        <template v-else><p class="game-lead">套餐统一售价 ¥{{run?.menu?.price}} · {{run?.menu?.packing}}。顾客口味不同，可以重新挑选蛋糕与饮品。</p><div class="game-grid"><button class="game-btn" type="button" @click="discount">售价 −¥10</button><button class="game-btn" type="button" @click="skip">本单暂不成交</button><button class="game-btn primary" type="button" @click="serve">确认组合交付</button></div></template>
      </div>

      <div v-if="phase==='result'" class="game-card"><h3 class="game-title">联名活动结算</h3><div class="game-stats"><span>售出 {{run?.sold||0}} 套</span><span>活动收入 ¥{{run?.revenue||0}}</span><span>顾客满意 {{run?.score||0}} / 3</span><span>搭配失误 {{run?.misses||0}} 次</span><span>累计合作经验 {{state.cafeCollab}}</span><span>本月主题 {{theme}}</span></div><p class="game-lead">套餐、交易记录和营业收益已归入主游戏经营数据与收藏记录。</p><button class="game-btn primary" type="button" style="width:100%" @click="emit('exit')">返回咖啡店</button></div>
      <div v-if="message&&phase!=='intro'" class="game-message">{{message}}</div>
    </div>
  </MiniShell>
</template>

<style scoped>
.name-input{box-sizing:border-box;width:100%;min-height:44px;padding:8px 10px;border:1px solid #d5b99e;border-radius:10px;background:white;color:#6b4a34}
</style>
