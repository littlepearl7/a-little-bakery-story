<script setup>
import { computed, ref } from 'vue';
import { save, state } from '../store';

const props = defineProps({ step: { type: String, required: true } });
const emit = defineEmits(['done']);
const progress = ref(state.tutorialPractice === props.step ? Number(state.tutorialPracticeProgress || 0) : 0);
const quantity = ref(2);
const phoneTab = ref('通知');
const phoneTabs = ['通知', '订单', '日历', '收藏'];
const stages = {
  counter: [
    '从柜台旁取一份原味奶油蛋糕。',
    '核对客人的需求，再把蛋糕装进纸盒。',
    '把纸盒递给客人，完成一次接待。',
  ],
  production: [
    '选择戚风胚和奶油，先备好基础材料。',
    '轻轻搅拌，让面糊保持细腻。',
    '观察烤箱火候，在合适的时候出炉。',
    '抹平奶油，给蛋糕加上简单装饰。',
  ],
  phone: [
    '打开通知，留意今天的店务提醒。',
    '打开订单，查看客人预订的蛋糕。',
    '浏览日历或收藏，确认重要日程和回忆。',
  ],
};
const config = computed(() => ({
  counter: { title: '前厅练习 · 接待客人', hint: '这是一笔练习订单，不会扣除成品或增加收入。', image: '柜台' },
  production: { title: '后厨练习 · 做一份蛋糕', hint: '练习材料、搅拌、烘烤和装饰，不会消耗库存。', image: '后厨' },
  purchase: { title: '街道练习 · 采购原料', hint: '可以直接输入数量；这次练习不会扣款或改变仓库。', image: '食材铺' },
  phone: { title: '手机练习 · 查看店务', hint: '不同页面各自记录通知、订单、日历与收藏。', image: '手机' },
}[props.step] || { title: '新手练习', hint: '', image: '' }));
const task = computed(() => stages[props.step] || []);

function next() {
  progress.value += 1;
  state.tutorialPracticeProgress = progress.value;
  save();
  if (props.step === 'purchase' || progress.value >= task.value.length) emit('done', props.step);
}

function confirmPurchase() {
  if (quantity.value < 1 || quantity.value > 99) return;
  next();
}

function inspectPhone(tab) {
  phoneTab.value = tab;
  const index = phoneTabs.indexOf(tab);
  if (index < 0 || index === progress.value) next();
}
</script>

<template>
  <div class="practice-mask">
    <section class="practice-card" role="dialog" aria-modal="true" :aria-label="config.title">
      <div class="practice-banner"><span>林暖带你认识 · {{ config.image }}</span></div>
      <h1>{{ config.title }}</h1>
      <p class="hint">{{ config.hint }}</p>

      <template v-if="step === 'purchase'">
        <div class="practice-task">给明天的练习准备 2 份基础烘焙包。</div>
        <label class="quantity">采购数量
          <input v-model.number="quantity" type="number" inputmode="numeric" min="1" max="99" />
        </label>
        <button class="practice-action" type="button" :disabled="quantity < 1 || quantity > 99" @click="confirmPurchase">确认练习采购</button>
      </template>

      <template v-else-if="step === 'phone'">
        <div class="phone-mock">
          <nav><button v-for="tab in phoneTabs" :key="tab" type="button" :class="{ active: phoneTab === tab }" @click="inspectPhone(tab)">{{ tab }}</button></nav>
          <div class="phone-content">{{ phoneTab === '订单' ? '练习订单 LJ-TEST · 原味奶油蛋糕 × 2' : phoneTab === '日历' ? '明天：准备营业日' : phoneTab === '收藏' ? '这里会保存图鉴、剧情和照片' : '欢迎来到林记烘焙，记得查看当天安排。' }}</div>
        </div>
      </template>

      <template v-else>
        <div class="practice-task">{{ task[Math.min(progress, task.length - 1)] }}</div>
        <div v-if="step === 'counter'" class="mock-counter"><span>原味奶油蛋糕 × 1</span><b>{{ ['取出蛋糕','装盒','递交'][Math.min(progress, 2)] }}</b></div>
        <div v-else class="mock-counter"><span>{{ ['戚风胚 · 奶油','搅拌均匀','烘烤出炉','抹面装饰'][Math.min(progress, 3)] }}</span><b>练习材料</b></div>
      </template>

      <button v-if="step !== 'purchase' && step !== 'phone'" class="practice-action" type="button" @click="next">{{ progress + 1 >= task.length ? '完成练习' : '下一步' }}</button>
      <div class="practice-progress" v-if="task.length">练习 {{ Math.min(progress + 1, task.length) }} / {{ task.length }}</div>
    </section>
  </div>
</template>

<style scoped>
.practice-mask{position:fixed;inset:0;z-index:500;display:flex;align-items:center;justify-content:center;padding:18px;background:#241910aa}.practice-card{width:min(100%,430px);max-height:92dvh;overflow:auto;padding:18px;border:1px solid #e3c9ab;border-radius:20px;background:#fffaf2;color:#64452f;box-shadow:0 15px 50px #160f0a66}.practice-banner{height:112px;display:flex;align-items:flex-end;padding:10px;border-radius:13px;background:linear-gradient(135deg,#ead3b7,#a8b49a);color:white;text-shadow:0 1px 4px #443}.practice-card h1{margin:14px 0 4px;font-size:19px}.hint{margin:0 0 15px;color:#88715b;font-size:12px;line-height:1.6}.practice-task{min-height:62px;padding:13px;border-radius:12px;background:#f6ead8;font-size:14px;line-height:1.7}.mock-counter{display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding:14px 12px;border:1px dashed #cba987;border-radius:11px;font-size:12px}.mock-counter b{padding:7px 10px;border-radius:8px;background:#ebe4d6;color:#628055;font-size:10px}.practice-action{width:100%;min-height:48px;margin-top:13px;border:0;border-radius:12px;background:#6b4a34;color:#fffaf2;font-size:14px;font-weight:700}.practice-action:disabled{opacity:.45}.practice-progress{margin-top:9px;text-align:center;color:#88715b;font-size:11px}.quantity{display:flex;align-items:center;justify-content:space-between;margin-top:13px;font-size:13px}.quantity input{width:120px;min-height:44px;padding:6px 10px;border:1px solid #d8bea1;border-radius:10px;color:#64452f;font:inherit}.phone-mock{overflow:hidden;border:1px solid #d7c1a8;border-radius:16px;background:#fcf6ec}.phone-mock nav{display:flex;gap:4px;padding:8px}.phone-mock nav button{flex:1;min-height:44px;border:0;border-radius:9px;background:transparent;color:#72553d;font-size:11px}.phone-mock nav button.active{background:#e9e3d5}.phone-content{min-height:90px;padding:16px;border-top:1px solid #e5d5c2;font-size:13px;line-height:1.7}
</style>
