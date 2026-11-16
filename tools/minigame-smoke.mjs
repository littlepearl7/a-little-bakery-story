import assert from 'node:assert/strict';
import { createServer } from 'vite';

const values=new Map();
globalThis.localStorage={setItem:(k,v)=>values.set(k,v),getItem:k=>values.get(k)||null,removeItem:k=>values.delete(k)};
const vite=await createServer({server:{middlewareMode:true},optimizeDeps:{noDiscovery:true,include:[]},appType:'custom'});
try{
  const s=await vite.ssrLoadModule('/src/store.js');
  const reset=()=>Object.assign(s.state,s.newState());
  // 制作：一天仅一轮，完整结算把真实原料变成实物库存。
  reset();
  s.state.plan={strawberry:2};
  assert(s.beginProductionTest());
  const oldStrawberry=s.state.pantry.strawberry;
  const bake=s.finishProductionTest(93,false,'新鲜草莓');
  assert(bake.ok && bake.bonus===30);
  assert.equal(s.state.shelf.strawberry,2);
  assert.equal(s.state.pantry.strawberry,oldStrawberry-2);
  assert.equal(s.state.dayPhase,'service-ready');
  assert.equal(s.beginProductionTest(),false);
  // 交付：预约编号来自已接订单，状态与销售额/现货一致。
  s.state.orders=[{id:'o-test',orderNo:'LJ-0101-01',type:'定制',kind:'appointment',customer:'测试客人',product:'strawberry',qty:1,pay:180,due:'粉色小花',blessing:'生日快乐',taken:true}];
  s.openShop();
  const t=s.state.service.tickets[0];
  assert.equal(t.orderNo,'LJ-0101-01');
  assert.equal(t.kind,'appointment');
  assert(s.findCake(t.id,'strawberry',1).ok);
  s.advanceServiceTime(2);
  assert(s.packOrder(t.id,t.due,t.blessing).ok);
  assert.equal(t.status,'packing');
  s.advanceServiceTime(3.6);
  assert.equal(t.status,'ready');
  assert(s.deliverTicket(t.id).ok);
  assert.equal(t.status,'delivered');
  assert.equal(t.revenue,198);
  assert.equal(s.deliverTicket(t.id).ok,false);
  assert.equal(s.state.shelf.strawberry,1);
  // 市集：配货不会凭空补库存，卖出同步到主店。
  reset();s.state.dayPhase='service-ready';s.state.shelf.strawberry=4;
  s.state.batches=[{id:'test',product:'strawberry',qty:4,quality:'normal'}];
  assert(s.startMarketGame({inventory:{strawberry:2},theme:'春日甜品市集'}).ok);
  const m=s.marketDemand();assert.equal(m.product,'strawberry');
  assert(s.serveMarketCustomer('strawberry').ok);
  assert.equal(s.state.shelf.strawberry,4-m.qty);
  assert.equal(s.state.marketRun.inventory.strawberry,2-m.qty);
  // 联名：不同顾客有不同风味要求，营业扣库存与咖啡成本。
  reset();s.state.dayPhase='service-ready';s.state.shelf.chocolate=3;
  s.state.batches=[{id:'test',product:'chocolate',qty:3,quality:'normal'}];
  assert(s.startCafeGame({product:'chocolate',coffee:'americano',price:150,theme:'冬日巧克力时光'}).ok);
  assert(s.serveCafeCustomer({product:'chocolate',coffee:'americano'}).ok);
  assert.equal(s.state.shelf.chocolate,2);
  assert.equal(s.state.monthCost,8);
  assert(s.coffeePairingFits('matcha','latte'), '抹茶红豆与拿铁是有效的联名搭配');
  assert(s.coffeePairingFits('strawberry','latte'), '草莓奶油与拿铁是有效的联名搭配');
  // 研发：使用真实配方材料，研发记录与解锁配方持续保存。
  reset();s.state.month=4;s.state.pantry.taro=2;s.state.pantry.crisp=2;
  const r=s.beginRecipeWorkshopTrial({productId:'taro',ingredients:['荔浦芋泥','焦糖杏仁薄脆'],base:'戚风',cream:'栗子泥',direction:1,ratio:0,process:1,decoration:1});
  assert(r.ok);
  assert(s.state.labPending.passed);
  assert(s.publishResearch().ok);
  assert(s.state.unlocked.includes('taro'));
  assert(s.nameResearchedRecipe('taro','小镇栗香'));
  assert.equal(s.displayProductName('taro'),'小镇栗香');
  console.log('✓ 五个小游戏经营数据冒烟测试全部通过');
}finally{await vite.close();}
