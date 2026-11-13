<script setup>
import { computed, onUnmounted, ref } from 'vue';
import { art, artStatus } from '../../data';
import { state, availableProducts, openShop, findCake, packOrder, advanceServiceTime, deliverTicket, declineTicket, selectServiceTicket, displayProductName, save } from '../../store';
import MiniShell from './MiniShell.vue';

const emit=defineEmits(['exit']);
const phase=ref('intro');
const selected=ref('');
const misses=ref(0);
const completed=ref(0);
const earned=ref(0);
const message=ref('');
const phone=ref(false);
const query=ref('');
const found=ref(null);
const checked=ref(false);
const packing=ref(false);
const packSerial=ref(0);
const packTime=ref(0);
let packTimer=null;
const PACK_DURATION=3600; // 原始草莓蛋糕打包动画.gif：8 帧 × 450ms
const LOOK={
  plain:'圆形浅黄色戚风胚，外层抹薄薄的白奶油，顶端只有奶油花。',
  strawberry:'圆形白奶油蛋糕，顶部摆三颗红草莓，侧面能看到草莓果肉夹层。',
  chocolate:'深棕色圆形蛋糕，巧克力奶油抹面，顶上撒细碎的可可巧克力屑。',
  taro:'淡紫色圆蛋糕，夹着芋泥，顶端有焦糖杏仁薄脆。',
  matcha:'浅绿色茶香奶油蛋糕，顶部点缀蜜红豆颗粒。',
  mango:'金黄色圆形慕斯，顶部有芒果丁和切成薄片的芒果。',
  tiramisu:'方形蛋糕，表面深棕色可可粉，侧面白色奶酪层清晰可见。',
  fig:'白奶油蛋糕，顶部的紫红色无花果果瓣排成花形。',
  seasonal:'圆形奶油蛋糕，顶部装饰多种当季水果，颜色丰富。',
  custom:'双层圆形奶油蛋糕，有精致裱花、庆祝小牌和专属装饰。',
  festival:'红棕色奶油蛋糕，顶部布满节庆糖珠和糖花。',
  signature:'棕黄色圆形蛋糕，表层栗子奶油呈螺旋纹，撒有细小金桂。',
};
const tickets=computed(()=>state.service?.tickets || []);
const current=computed(()=>tickets.value[state.service?.current||0]||null);
const isPickup=computed(()=>current.value?.kind==='appointment');
const shelf=computed(()=>availableProducts.value.map(p=>({...p,qty:state.shelf[p.id]||0})));
const cakeArt=id=>artStatus(`cake-${id}.webp`)==='ok'?art(`cake-${id}.webp`):'';
const steps=computed(()=>tickets.value.filter(t=>t.status==='delivered').length);
const regularDescription=computed(()=>current.value?LOOK[current.value.product]||'一款有明显夹层和精致装饰的蛋糕。':'');
const deliveryLine=computed(()=>!current.value?'':isPickup.value?`你好，我来取预订的蛋糕，订单编号是 ${current.value.orderNo}。`:`你好，想要 ${regularDescription.value} 请给我 ${current.value.qty} 份。`);

function start(){
  if(state.dayPhase==='service-ready' && !state.service){
    const r=openShop();
    if(!r){message.value='请先制作蛋糕、接好预约单，再开始柜台接待。';return;}
  }
  if(!state.service){message.value=state.dayPhase==='closing'?'今天营业已经结束。':'当前不能开始营业，请先在后厨制作蛋糕。';return;}
  if(!current.value){phase.value='result';return;}
  selectServiceTicket(current.value.id);
  phase.value='play';message.value='根据顾客描述挑选蛋糕；预约顾客请先在手机中核对订单。';
  if(['packing','ready'].includes(current.value.status)) resumePacking();
}
function lookup(){
  const key=query.value.trim().toUpperCase();
  found.value=tickets.value.find(t=>t.orderNo?.toUpperCase()===key)||null;
  message.value=found.value?'已找到预约订单，记得核对规格与特别要求。':'没有找到这个编号，请核对后再试。';
  if(found.value?.id===current.value?.id){checked.value=true;}
}
function pick(id){
  if(packing.value)return;
  selected.value=id;
  message.value=`已选 ${displayProductName(id)}，柜台库存 ${state.shelf[id]||0} 份。`;
}
function pack(){
  const t=current.value;
  if(!t||packing.value)return;
  if(isPickup.value&&!checked.value)return message.value='预约取货必须先打开手机，按订单编号核对详情。';
  if(!selected.value)return message.value='先从右侧蛋糕展示柜挑选。';
  if(selected.value!==t.product){misses.value++;message.value='这款蛋糕的特征与顾客需求不一致，请重新核对。';selected.value='';return;}
  if((state.shelf[t.product]||0)<t.qty)return message.value='该款库存不足，请返回后厨处理或选择缺货登记。';
  if(t.status==='waiting'){
    const r=findCake(t.id,t.product,t.qty);
    if(!r.ok)return message.value=r.message;
    advanceServiceTime(2);
  }else if(t.status==='searching')advanceServiceTime(Math.max(2,t.findRemaining||0));
  if(t.status==='found'){
    const p=packOrder(t.id,t.type==='定制'?t.due:null,t.type==='定制'?t.blessing:null);
    if(!p.ok)return message.value=p.message;
  }
  if(!['packing','ready'].includes(t.status))return message.value='请先找到并核对蛋糕。';
  resumePacking();
}
function resumePacking(){
  packing.value=true;
  packSerial.value+=1;
  packTime.value=0;
  message.value='打包过程中无法跳过或重复触发。';
  const startAt=performance.now();
  packTimer=setInterval(()=>{
    packTime.value=Math.min(PACK_DURATION,performance.now()-startAt);
    if(packTime.value>=PACK_DURATION){clearInterval(packTimer);packTimer=null;finishPack();}
  },40);
}
function finishPack(){
  const t=current.value;
  if(!t)return;
  if(t.status==='packing')advanceServiceTime(PACK_DURATION/1000);
  const before=state.dayRev;
  const r=deliverTicket(t.id);
  packing.value=false;
  if(!r.ok){message.value=r.message;return;}
  completed.value+=t.qty;
  earned.value+=state.dayRev-before;
  message.value=r.message;
  selected.value='';checked.value=false;found.value=null;query.value='';
  if(!current.value){state.deliveryDay=state.dayIndex;save();phase.value='result';}
  else selectServiceTicket(current.value.id);
}
function unavailable(){
  const t=current.value;
  if(!t||packing.value)return;
  if(declineTicket(t.id)){
    misses.value+=1;message.value='缺货已记录，当前订单不会扣除库存。';
    selected.value='';checked.value=false;found.value=null;
    if(!current.value){state.deliveryDay=state.dayIndex;save();phase.value='result';}
    else selectServiceTicket(current.value.id);
  }
}
onUnmounted(()=>{if(packTimer)clearInterval(packTimer);});
</script>

<template>
  <MiniShell bg="minigame-delivery" title="订单交付" :sub="phase==='play'?'已完成 '+steps+' / '+tickets.length+' 单 · 今日 ¥'+state.dayRev:'顾客点单与预约取货'" @exit="emit('exit')">
    <div v-if="phase==='intro'" class="game-scroll"><div class="game-card"><h3 class="game-title">接待今日顾客</h3><p class="game-lead">普通客人会描述蛋糕外观，预约客人会报真实订单编号。请在右侧柜子选蛋糕、核对数量，再完整播放打包动画。</p><div class="game-stats"><span>货架现货 {{ Object.values(state.shelf).reduce((a,b)=>a+b,0) }} 份</span><span>预约订单 {{ state.orders.filter(o=>o.taken).length }} 笔</span></div><p v-if="message" class="game-message">{{message}}</p><button class="game-btn primary" style="width:100%;margin-top:10px" type="button" @click="start">{{state.service?'继续当日营业':'开始柜台营业'}}</button></div></div>

    <template v-if="phase==='play' && current">
      <div class="customer"><span class="customer-name">{{current.customer}} · {{isPickup?'预约取货':'到店购买'}}</span><p>{{deliveryLine}}</p></div>
      <div class="case"><button v-for="p in shelf" :key="p.id" class="cake-cell" type="button" :class="{active:selected===p.id,empty:p.qty<current.qty}" :disabled="packing" @click="pick(p.id)"><img v-if="cakeArt(p.id)" :src="cakeArt(p.id)" :alt="p.name"><span>{{displayProductName(p.id)}}</span><small>{{p.qty<current.qty?'缺货':'剩'+p.qty}}</small></button></div>
      <div class="delivery-bar game-card">
        <div class="game-row"><span>顾客要 {{current.qty}} 份</span><span>{{selected?displayProductName(selected):'尚未选择'}}</span></div>
        <p v-if="message" class="game-message">{{message}}</p>
        <div class="game-grid"><button class="game-btn" type="button" @click="phone=true" :disabled="packing">📱 手机订单</button><button class="game-btn" type="button" @click="unavailable" :disabled="packing">登记缺货</button><button class="game-btn primary" type="button" @click="pack" :disabled="packing">打包交付</button></div>
      </div>
    </template>

    <div v-if="phone" class="phone-backdrop" @click.self="phone=false"><section class="phone-screen game-card"><div class="game-row"><h3 class="game-title">📱 手机 · 订单详情</h3><button class="game-btn" type="button" @click="phone=false">返回柜台</button></div><div class="game-row"><input class="order-input" type="search" v-model="query" placeholder="输入预约订单编号" @keyup.enter="lookup"><button class="game-btn primary" type="button" @click="lookup">查询</button></div><div v-if="found" class="order-detail"><b>{{found.orderNo}} · {{found.customer}}</b><p>蛋糕：{{displayProductName(found.product)}} × {{found.qty}}</p><p>外观：{{LOOK[found.product]}}</p><p>规格：{{found.qty}} 份 · {{found.type}}</p><p>装饰：{{found.due||'按标准配方'}}</p><p>祝福：{{found.blessing||'无'}}</p><p>取货：第 {{state.month}} 月第 {{state.day}} 日</p><p>状态：{{({waiting:'待取货',delivered:'已交付',searching:'正在找货',found:'待打包',packing:'打包中',ready:'待交付',unavailable:'缺货'})[found.status]||found.status}}</p></div><div class="game-section">当日预约单</div><div v-for="t in tickets.filter(t=>t.kind==='appointment')" :key="t.id" class="order-list"><span>{{t.orderNo}} · {{t.customer}}</span><span>{{t.status==='delivered'?'已交付':'待取货'}}</span></div><p class="game-lead">订单与柜台营业共用同一份数据，交付后状态自动更新。</p></section></div>

    <div v-if="packing" class="packing-mask"><div class="game-card pack-card"><h3 class="game-title">蛋糕正在打包……</h3><img :key="packSerial" :src="art('minigame-packing.gif')+'?once='+packSerial" alt="草莓蛋糕完整打包动画"><div class="game-progress"><i :style="{width:Math.round(packTime/PACK_DURATION*100)+'%'}"/></div><p class="game-lead game-center">{{(Math.max(0,PACK_DURATION-packTime)/1000).toFixed(1)}} 秒 · 动画播完自动交付</p></div></div>

    <div v-if="phase==='result'" class="game-scroll"><div class="game-card"><h3 class="game-title">今日柜台结算</h3><div class="game-stats"><span>完成交付 {{completed}} 份</span><span>本局收入 ¥{{earned}}</span><span>选错／缺货 {{misses}} 次</span><span>订单完成 {{steps}} / {{tickets.length}}</span></div><p class="game-lead">订单状态、库存、营业收入及人物关系已同步至经营数据。{{misses?'下次可以多对照一下订单描述。':'今天的服务非常细致！'}}</p><button class="game-btn primary" style="width:100%" type="button" @click="emit('exit')">返回蛋糕店</button></div></div>
  </MiniShell>
</template>

<style scoped>
.customer{position:absolute;left:12px;top:9%;width:57%;max-width:260px;animation:enter .35s ease both}
.customer-name{font-size:11px;border-radius:99px;background:#6b4a34d9;color:#fffaf2;padding:5px 10px}
.customer p{background:#fffaf2f5;border-radius:12px;padding:10px 12px;box-shadow:0 6px 18px #35241638;font-size:12px;line-height:1.65;color:#6b4a34}
.case{position:absolute;left:61%;right:2%;top:17%;height:44%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px;overflow-y:auto;align-content:start}
.cake-cell{min-width:0;padding:4px 2px;border:1px solid #fffaf2b0;border-radius:9px;background:#fffaf2cd;display:grid;justify-items:center;color:#6b4a34;cursor:pointer}
.cake-cell img{width:100%;height:44px;object-fit:contain}
.cake-cell span{max-width:100%;font-size:9px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cake-cell small{font-size:9px;color:#866b54}
.cake-cell.active{outline:2px solid #6b4a34;background:#f7e6d0}
.cake-cell.empty{opacity:.55}
.delivery-bar{position:absolute;bottom:calc(12px + env(safe-area-inset-bottom));left:12px;right:12px;padding:10px!important}
.delivery-bar .game-grid{margin:5px 0 0}
.phone-backdrop,.packing-mask{position:absolute;inset:0;z-index:15;display:flex;align-items:center;justify-content:center;padding:14px;background:#352416a6}
.phone-screen{width:100%;max-width:400px;max-height:87%;overflow-y:auto}
.order-input{flex:1;min-width:0;height:44px;padding:5px 9px;border:1px solid #d5b99e;border-radius:9px;font-size:13px}
.order-detail{background:#fff3e1;border-radius:12px;padding:12px;font-size:12px;line-height:1.5}
.order-detail p{margin:5px 0}
.order-list{display:flex;justify-content:space-between;gap:10px;padding:7px 0;border-bottom:1px solid #edd9c3;font-size:11px}
.pack-card{width:min(88vw,350px);text-align:center}
.pack-card img{display:block;width:100%;max-height:270px;object-fit:contain}
@keyframes enter{from{opacity:0;transform:translateX(-12px)}to{opacity:1;transform:translateX(0)}}
</style>
