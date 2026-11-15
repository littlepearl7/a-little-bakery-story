<script setup>
import { computed, reactive, ref } from 'vue';
import { art, INGREDIENTS, DEVICES, CITIES } from '../data';
import {
  state, pantryUnits, deviceTier, deviceNext, upgradeDevice, seasonalEvent,
  takeTownPhoto, RIVER_EVENTS, exploreRiver, changeOutfit, submitDesign,
  chatCafeOwner, sceneAvailability,
} from '../store';

const props = defineProps({ section: { type: String, default: 'pantry' } });
const emit = defineEmits(['open-panel', 'rest-day']);
const message = ref('');
const design = reactive({ shape: '圆形', color: '奶油白', decoration: '草莓与花朵', packaging: '牛皮纸礼盒' });
const event = computed(() => seasonalEvent());
const eventMaterials = computed(() => event.value.materials.map((id) => ({ ...INGREDIENTS.find((item) => item.id === id), stock: state.pantry[id] || 0 })));
const functions = {
  pantry: '食材区 · 原料库存', devices: '设备区 · 烘焙升级', wardrobe: '衣柜 · 日常穿搭', bedroom: '卧室 · 夜晚休息',
  studio: '设计工作台', designs: '设计作品收藏', river: '河岸风景与事件',
  park: '花影与风景相册', cafe: '秋屿咖啡', calendar: '本季小镇日历', branch: '品牌新店经营',
};

function run(action) {
  const result = action();
  message.value = result?.message || (result ? '操作已完成。' : '当前无法操作。');
}

function upgrade(id) {
  const success = upgradeDevice(id);
  message.value = success ? '设备升级完成，生产数据已保存。' : '资金不足，或当前不是营业准备阶段。';
}

function saveDesign() {
  run(() => submitDesign({ ...design }));
}
</script>

<template>
  <section class="scene-feature">
    <h3>{{ functions[section] || '小镇生活' }}</h3>
    <p v-if="message" class="feature-message" role="status">{{ message }}</p>

    <template v-if="section === 'bedroom'">
      <p class="feature-help">回到自己的房间，结束今天，明早继续经营。还没开门的日子也可以选择休息；若已经备货，剩余蛋糕将按打折方式处理。</p>
      <p class="feature-preview">今天：第 {{ state.month }} 月第 {{ state.day }} 日<br />营业阶段：{{ ({prep:'准备营业', 'service-ready':'已备货，待开门', service:'正在接待顾客', closing:'已打烊'})[state.dayPhase] || state.dayPhase }}</p>
      <button class="feature-primary" :disabled="!['prep','service-ready','closing'].includes(state.dayPhase)" @click="emit('rest-day')">休息 · 进入下一天</button>
      <p v-if="state.dayPhase === 'service'" class="feature-help">柜台还有顾客，请先完成交付。</p>
    </template>

    <template v-else-if="section === 'pantry'">
      <p class="feature-help">当前仓储 {{ pantryUnits }} / {{ state.warehouseCapacity }} 份。制作蛋糕、研发和活动共用这份库存。</p>
      <div class="feature-list">
        <div v-for="ingredient in INGREDIENTS" :key="ingredient.id" class="feature-line">
          <span>{{ ingredient.name }} <small v-if="ingredient.month > state.month">第 {{ ingredient.month }} 月解锁</small></span>
          <b :class="{ low: (state.pantry[ingredient.id] || 0) < 2 }">{{ Number(state.pantry[ingredient.id] || 0).toFixed(1).replace(/\.0$/, '') }} 份</b>
        </div>
      </div>
      <button class="feature-primary" @click="emit('open-panel', 'supplier')">去食材铺补货</button>
    </template>

    <template v-else-if="section === 'devices'">
      <p class="feature-help">升级消耗真实金币。设备效果直接影响产能、冷藏与打包效率，保留在经营存档中。</p>
      <div v-for="device in DEVICES" :key="device.id" class="feature-row">
        <div><strong>{{ device.name }}</strong><small>Lv{{ deviceTier(device.id) }} · {{ deviceNext(device.id)?.text || '已满级' }}</small></div>
        <button :disabled="!deviceNext(device.id) || state.cash < deviceNext(device.id).cost || state.dayPhase !== 'prep'" @click="upgrade(device.id)">{{ deviceNext(device.id) ? '升级 ¥' + deviceNext(device.id).cost : '已满级' }}</button>
      </div>
    </template>

    <template v-else-if="section === 'wardrobe'">
      <p class="feature-help">从已解锁的服装里挑一套。换装不消耗行动力，选择会保存到本局档案。</p>
      <div class="outfit-grid">
        <button v-for="outfit in [{ id: 'auto', title: '按场合换装', img: 'ln-sprite-in.webp' }, { id: 'daily', title: '小镇日常', img: 'ln-sprite-out.webp' }, { id: 'bakery', title: '烘焙工作服', img: 'ln-sprite-in.webp' }]" :key="outfit.id" class="outfit" :class="{ active: state.outfit === outfit.id }" @click="run(() => ({ ok: changeOutfit(outfit.id), message: '已换上「' + outfit.title + '」。' }))">
          <img :src="art(outfit.img)" :alt="outfit.title" /><span>{{ outfit.title }}</span>
        </button>
      </div>
    </template>

    <template v-else-if="section === 'studio'">
      <p class="feature-help">完成一套蛋糕与包装视觉方案，需要行动力和装饰料，可为林记积累品牌经验。</p>
      <label class="feature-select">蛋糕造型<select v-model="design.shape"><option>圆形</option><option>方形</option><option>双层</option><option>花环形</option></select></label>
      <label class="feature-select">主体配色<select v-model="design.color"><option>奶油白</option><option>樱花粉</option><option>抹茶绿</option><option>巧克力棕</option></select></label>
      <label class="feature-select">表面装饰<select v-model="design.decoration"><option>草莓与花朵</option><option>巧克力碎</option><option>坚果与焦糖</option><option>季节鲜果</option></select></label>
      <label class="feature-select">礼盒包装<select v-model="design.packaging"><option>牛皮纸礼盒</option><option>粉色丝带礼盒</option><option>鼠尾草绿包装</option><option>节日限定包装</option></select></label>
      <p class="feature-preview">方案预览：{{ design.color }} · {{ design.shape }}蛋糕 · {{ design.decoration }}<br />{{ design.packaging }}</p>
      <button class="feature-primary" :disabled="state.dayPhase !== 'prep' || state.ap < 1 || (state.pantry.decor || 0) < 1" @click="saveDesign">保存设计方案</button>
      <button class="feature-secondary" @click="emit('open-panel', 'feature', 'designs')">查看以往作品</button>
    </template>

    <template v-else-if="section === 'designs'">
      <p class="feature-help">设计稿在存档中永久保留，可作为定制订单与联名包装的创意记录。</p>
      <p v-if="!state.designWorks.length" class="feature-help">还没有作品。去设计工作台完成第一份设计吧。</p>
      <div v-for="work in [...state.designWorks].reverse()" :key="work.id" class="feature-row feature-design">
        <div><strong>{{ work.color }} · {{ work.shape }}蛋糕</strong><small>{{ work.decoration }} / {{ work.packaging }} · 第{{ work.month }}月{{ work.day }}日</small></div>
      </div>
    </template>

    <template v-else-if="section === 'park' || section === 'river'">
      <p class="feature-help">风景照片每个月每个地点可收藏一次，花费 1 点行动力。</p>
      <button class="feature-primary" @click="run(() => takeTownPhoto(section))">📷 拍摄{{ section === 'river' ? '河岸晚风' : '公园花影' }}</button>
      <template v-if="section === 'river'">
        <h4>河岸特殊事件</h4>
        <div v-for="riverEvent in RIVER_EVENTS" :key="riverEvent.id" class="feature-row feature-story">
          <div><strong>{{ riverEvent.title }}</strong><small>{{ state.sceneEvents.includes(riverEvent.id) ? '已收集 · ' + riverEvent.reward : riverEvent.unlock() ? riverEvent.detail : '尚未满足触发条件' }}</small></div>
          <button :disabled="!riverEvent.unlock() || state.sceneEvents.includes(riverEvent.id) || state.dayPhase !== 'prep' || state.ap < 1" @click="run(() => exploreRiver(riverEvent.id))">{{ state.sceneEvents.includes(riverEvent.id) ? '已完成' : '触发' }}</button>
        </div>
      </template>
    </template>

    <template v-else-if="section === 'cafe'">
      <div v-if="state.played.includes('EVT_ZHIQIU_CH01')" class="feature-npc"><strong>沈知秋</strong><small>秋屿咖啡主理人 · 熟悉度 {{ state.cafeRelation }}</small><p>“咖啡与甜点的搭配，像是两个人互相照亮。你的蛋糕很适合这里。”</p></div>
      <p v-else class="feature-help">这间咖啡店还没有正式对外开放。</p>
      <button class="feature-primary" :disabled="!state.played.includes('EVT_ZHIQIU_CH01')" @click="run(chatCafeOwner)">聊天 · 1 行动力</button>
      <button class="feature-secondary" @click="emit('open-panel', 'game:cafe')">一起设计联名套餐</button>
    </template>

    <template v-else-if="section === 'calendar'">
      <p class="feature-help">第 {{ state.month }} 月 · {{ event.title }}</p>
      <p class="feature-preview">地点：{{ event.place }}<br />{{ event.detail }}</p>
      <h4>提前准备的材料</h4>
      <div v-for="material in eventMaterials" :key="material.id" class="feature-line"><span>{{ material.name }}</span><strong>现有 {{ material.stock }} 份</strong></div>
      <button class="feature-primary" @click="emit('open-panel', 'supplier')">前往采购</button>
    </template>

    <template v-else-if="section === 'branch'">
      <p class="feature-help">当前 {{ state.storeCount }} 家门店 · 品牌 {{ Math.round(state.brand) }} · 已开设城市 {{ state.cities.length }} 个</p>
      <div v-for="city in CITIES.filter((city) => state.cities.includes(city.id))" :key="city.id" class="feature-line"><span>{{ city.name }}</span><strong>已营业</strong></div>
      <p class="feature-preview">拓展新城市需要考察、经营资金与口碑；分店收入与主店共享经营存档。</p>
      <button class="feature-primary" @click="emit('open-panel', 'manage', 'branch')">进入多门店管理</button>
      <p class="feature-help">品牌解锁状态：{{ sceneAvailability('store').open ? '已开放' : sceneAvailability('store').reason }}</p>
    </template>
  </section>
</template>

<style scoped>
.scene-feature{color:#6b4a34;font-size:13px}.scene-feature h3{margin:0 0 8px;font-size:17px}.scene-feature h4{margin:15px 0 5px;font-size:14px}.feature-help{margin:6px 0 13px;line-height:1.75;color:#8c6a50}.feature-list{border-top:1px solid #eadbcd}.feature-line{display:flex;justify-content:space-between;gap:10px;align-items:center;padding:9px 3px;border-bottom:1px solid #eadbcd;font-size:12px}.feature-line b,.feature-line strong{white-space:nowrap}.feature-line .low{color:#c7655a}.feature-line small{color:#b49d88;font-size:10px}.feature-row{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:11px 0;border-bottom:1px solid #e9dbcb}.feature-row>div{min-width:0;flex:1;display:grid;gap:3px}.feature-row small{font-size:11px;line-height:1.5;color:#8c6a50}.feature-row button{flex:0 0 auto;min-width:76px;min-height:40px;background:#fffdf8;color:#6b4a34;border:1px solid #ccb9a2;border-radius:9px;font:600 11px inherit}.feature-row button:disabled{opacity:.45}.feature-primary,.feature-secondary{min-height:46px;width:100%;margin-top:13px;background:#6b4a34;color:#fffdf6;border:0;border-radius:11px;font-size:13px;font-weight:600}.feature-primary:disabled{opacity:.45}.feature-secondary{background:#fffdf8;color:#6b4a34;border:1px solid #cdb79d;margin-top:8px}.feature-message{white-space:pre-line;padding:10px 12px;border-radius:10px;background:#e8f0e4;color:#526b46;line-height:1.7}.feature-select{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:7px 0;font-size:13px}.feature-select select{width:60%;min-height:40px;color:#6b4a34;background:#fffdf8;border:1px solid #decab5;border-radius:9px;padding:5px}.feature-preview{line-height:1.9;padding:12px;border-radius:12px;background:#f7e6d0}.outfit-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.outfit{display:grid;gap:6px;background:#fff9f1;border:2px solid #dfc5a7;border-radius:12px;color:#6b4a34;padding:7px}.outfit.active{border-color:#87a178;background:#eef4e7}.outfit img{width:100%;height:145px;object-fit:contain}.feature-npc{background:#f7e6d0;padding:12px;border-radius:12px}.feature-npc strong,.feature-npc small{display:block}.feature-npc small{color:#8c6a50}.feature-npc p{line-height:1.8}.feature-story{align-items:flex-start}.feature-design{padding:12px 4px}
</style>
