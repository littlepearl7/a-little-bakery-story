<script setup>
import { computed, ref } from 'vue';
import { PRODUCTS, PHOTOS, CITIES, CUSTOMERS, DECORATIONS, STAGES, ENDINGS } from '../data';
import { state, priceOf } from '../store';
import { STORY } from '../story';
import CakeArt from '../components/CakeArt.vue';
import { CG_COLLECTION, cgOf } from '../vn';

const props = defineProps({ initialSegment: { type: String, default: 'product' } });
const seg = ref(props.initialSegment);
const selectedCg = ref(null);

const products = computed(() =>
  PRODUCTS.map((p) => ({
    ...p,
    flavor: (STORY.codex[p.id] || {}).flavor || p.desc,
    hint: (STORY.codex[p.id] || {}).hint || '',
    owned: state.unlocked.includes(p.id),
    current: state.unlocked.includes(p.id),
    collected: state.career.products.includes(p.id),
    lv: Math.round((state.levels[p.id] || 1) * 10) / 10,
    price: priceOf(p.id),
    sold: state.monthSold[p.id] || 0,
  }))
);

const photos = computed(() =>
  Object.keys(PHOTOS).map((id) => ({
    id,
    ...PHOTOS[id],
    owned: state.photos.includes(id),
    current: state.photos.includes(id),
    collected: state.career.photos.includes(id),
  }))
);
const labReports = computed(() => PRODUCTS.map((product) => ({
  ...product,
  reports: state.career.labReports[product.id] || {},
})).filter((product) => product.reports.development || product.reports.improvement));
const osmanthusCG = computed(() => cgOf('osmanthus').src);
const cgs = computed(() => CG_COLLECTION.map((item) => ({
  id: item.id,
  ...cgOf(item.id),
  collected: state.career.cgs.includes(item.id),
})));

const cities = computed(() =>
  CITIES.map((c) => ({
    ...c,
    owned: state.cities.includes(c.id),
    surveyed: state.surveyed.includes(c.id),
  }))
);

const customers = computed(() => CUSTOMERS.map((customer) => ({
  ...customer,
  productName: PRODUCTS.find((product) => product.id === customer.product).name,
  visit: state.regularCustomers[customer.id],
})));

const collection = computed(() => ({
  products: PRODUCTS.map((product) => ({
    id: product.id,
    name: product.name,
    collected: state.career.products.includes(product.id),
    current: state.unlocked.includes(product.id),
  })),
  photos: Object.keys(PHOTOS).map((id) => ({
    id,
    name: PHOTOS[id].title,
    collected: state.career.photos.includes(id),
    current: state.photos.includes(id),
  })),
  cgs: cgs.value.map((cg) => ({
    id: cg.id,
    name: cg.name,
    collected: cg.collected,
    current: cg.collected,
  })),
  decorations: DECORATIONS.map((item) => ({
    id: item.id,
    name: item.name,
    collected: state.career.decorations.includes(item.id),
    current: state.decorations.includes(item.id),
  })),
  keepsakes: ['店铺钥匙', '旧配方本', '老店照片', '手写笔记'].map((name) => ({
    id: name,
    name,
    collected: (state.career.keepsakes || []).includes(name),
    current: (state.momKeepsakes || []).includes(name),
  })),
  endings: [
    ...STAGES.filter((stage) => !stage.final).map((stage) => ({
      id: stage.short.key,
      name: stage.short.name,
      collected: state.career.endings.includes(stage.short.key),
      current: state.runEndings.includes(stage.short.key),
    })),
    ...Object.entries(ENDINGS).map(([id, ending]) => ({
      id,
      name: ending.name,
      collected: state.career.endings.includes(id),
      current: state.runEndings.includes(id),
    })),
  ],
}));

function collectionStatus(item) {
  if (item.current) return '本轮已解锁';
  return item.collected ? '已收录 · 本轮未解锁' : '尚未收录';
}
</script>

<template>
  <div>
    <div class="seg">
      <button
        v-for="s in [
          { k: 'product', t: '产品' },
          { k: 'customer', t: '顾客' },
          { k: 'photo', t: '相册' },
          { k: 'cg', t: 'CG' },
          { k: 'city', t: '门店' },
          { k: 'collection', t: '收藏' },
          { k: 'lab', t: '实验档案' },
        ]"
        :key="s.k"
        type="button"
        :class="{ on: seg === s.k }"
        @click="seg = s.k"
      >
        {{ s.t }}
      </button>
    </div>

    <div v-if="seg === 'product'" class="card">
      <div v-for="p in products" :key="p.id" class="cake" :class="{ locked: !p.owned }">
        <div class="art"><CakeArt :id="p.id" :colors="p.colors" /></div>
        <div class="body">
          <div class="name">
            <span>{{ p.name }}</span>
            <span class="chip" style="font-size: 10px">{{ collectionStatus(p) }}</span>
            <span v-if="p.owned" class="chip" style="font-size: 10px">Lv{{ p.lv }}</span>
          </div>
          <div class="desc">{{ p.owned ? p.flavor : '第 ' + p.month + ' 个月解锁' }}</div>
          <div v-if="p.owned && p.hint" class="hint">配方：{{ p.hint }}</div>
          <div v-if="p.owned" class="nums">
            <span>¥{{ p.price }}</span>
            <span>{{ p.diff }} 点/个</span>
            <span>本月卖出 {{ p.sold }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="seg === 'photo'">
      <div class="photos">
        <div v-for="p in photos" :key="p.id" class="photo">
          <div class="im">
            <img v-if="p.collected && p.img" :src="p.img" :alt="p.title" />
            <span v-else-if="p.collected" class="small muted">未冲印</span>
            <span v-else style="font-size: 20px; opacity: 0.3">?</span>
          </div>
          <div class="cp">
            <div class="ti">{{ p.collected ? p.title : '还没发生' }}</div>
            <div class="cc">{{ p.collected ? p.caption : '继续经营，它会出现' }}</div>
            <div class="cc">{{ collectionStatus(p) }}</div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="seg === 'cg'" class="cg-gallery">
      <button v-for="cg in cgs" :key="cg.id" class="photo cg-card" type="button" :disabled="!cg.collected || !cg.src" @click="selectedCg = cg">
        <span class="im">
          <img v-if="cg.collected && cg.src" :src="cg.src" :alt="cg.name" />
          <span v-else>?</span>
        </span>
        <span class="cp">
          <span class="ti">{{ cg.collected ? cg.name : '还没发生' }}</span>
          <span class="cc">{{ collectionStatus(cg) }}</span>
        </span>
      </button>
    </div>

    <div v-else-if="seg === 'lab'" class="lab-list">
      <div v-if="!labReports.length" class="card card-pad small muted">完成一次新品上架或配方改良后，报告会保存在这里。</div>
      <article v-for="product in labReports" :key="product.id" class="card card-pad lab-report">
        <div class="between">
          <div class="h2" style="margin: 0">{{ product.name }}</div>
          <span class="chip" style="font-size: 10px">{{ state.career.products.includes(product.id) ? '配方已收录' : '已研发' }}</span>
        </div>
        <img v-if="product.reports.development?.type === 'signature' && osmanthusCG" class="lab-cg" :src="osmanthusCG" alt="桂花栗子蛋糕复原插画" />
        <div v-for="kind in ['development', 'improvement']" :key="kind" class="lab-entry">
          <template v-if="product.reports[kind]">
            <div class="between">
              <strong>{{ kind === 'improvement' ? '配方改良' : product.reports[kind].type === 'signature' ? '外婆配方复原' : product.reports[kind].refined ? '精制新品研发' : '新品研发' }}</strong>
              <span class="small muted">第 {{ product.reports[kind].run }} 轮 · M{{ product.reports[kind].month }}</span>
            </div>
            <div v-if="kind === 'development'" class="lab-scores">
              <span>总分 {{ product.reports[kind].score }}</span>
              <span v-for="metric in [
                { key: 'flavor', label: '风味' },
                { key: 'texture', label: '口感' },
                { key: 'appearance', label: '外观' },
                { key: 'cost', label: '成本' },
              ]" :key="metric.key">{{ metric.label }} {{ product.reports[kind].scores[metric.key] }}</span>
            </div>
            <div v-else class="small muted">熟练度 Lv{{ product.reports[kind].levelBefore }} → Lv{{ product.reports[kind].levelAfter }}</div>
            <p v-for="note in product.reports[kind].feedback" :key="note" class="lab-note">{{ note }}</p>
          </template>
        </div>
      </article>
    </div>

    <div v-else-if="seg === 'city'" class="card">
      <div
        v-for="c in cities"
        :key="c.id"
        class="city"
        :class="{ on: c.owned, off: !c.owned && !c.surveyed }"
      >
        <span class="dot"></span>
        <div style="flex: 1 1 auto; min-width: 0">
          <div class="nm">
            {{ c.name }}
            <span v-if="c.owned" class="chip sage" style="font-size: 10px">营业中</span>
            <span v-else-if="c.surveyed" class="chip pink" style="font-size: 10px">已考察</span>
          </div>
          <div class="nt">{{ c.note }}</div>
          <div v-if="!c.owned" class="nt">
            第 {{ c.month }} 个月可考察 · 口碑 {{ c.rep }} · 开店 ¥{{ c.cost }}
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="seg === 'customer'" class="customer-list">
      <div v-for="customer in customers" :key="customer.id" class="card card-pad customer">
        <div class="between">
          <div class="h2" style="margin: 0">{{ customer.name }}</div>
          <span class="chip" style="font-size: 10px">{{ customer.visit.purchases }} 次购买</span>
        </div>
        <div class="cc">每月第 {{ customer.day }} 个经营日 · {{ customer.productName }}</div>
        <div class="cc">{{ customer.preference }}</div>
        <div v-for="(story, i) in customer.stories" :key="i" class="customer-story">
          <div class="small muted">{{ i === 0 ? '第一次购买' : '第三次购买' }}</div>
          <div>{{ customer.visit.stories.includes(i) ? story : '继续经营，解锁这段回忆' }}</div>
        </div>
      </div>
    </div>

    <div v-else class="collection">
      <div v-for="section in [
        { key: 'products', title: '产品' },
        { key: 'photos', title: '相册' },
        { key: 'cgs', title: 'CG' },
        { key: 'decorations', title: '装饰' },
        { key: 'keepsakes', title: '妈妈的旧物' },
        { key: 'endings', title: '结局' },
      ]" :key="section.key" class="card card-pad">
        <div class="h2">{{ section.title }}</div>
        <div v-for="item in collection[section.key]" :key="item.id" class="between collect-row">
          <span>{{ item.name }}</span>
          <span class="small muted">{{ collectionStatus(item) }}</span>
        </div>
      </div>
    </div>

    <div v-if="selectedCg" class="cg-lightbox" role="dialog" aria-modal="true" :aria-label="selectedCg.name" @click.self="selectedCg = null">
      <button class="cg-lightbox-close" type="button" aria-label="关闭 CG" @click="selectedCg = null">✕</button>
      <img :src="selectedCg.src" :alt="selectedCg.name" />
      <div>{{ selectedCg.name }}</div>
    </div>
  </div>
</template>

<style scoped>
.seg {
  display: flex;
  margin-bottom: 12px;
  padding: 3px;
  background: var(--apricot);
  border-radius: 999px;
}
.seg button {
  flex: 1 1 0;
  height: 32px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--caramel-soft);
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
}
.seg button.on {
  background: var(--paper);
  color: var(--caramel);
  font-weight: 600;
  box-shadow: var(--shadow);
}
.customer-list,
.collection,
.lab-list {
  display: grid;
  gap: 10px;
}
.lab-report { display: grid; gap: 8px; }
.lab-entry { padding-top: 8px; border-top: 1px dashed var(--line); font-size: 12px; }
.lab-scores { display: flex; flex-wrap: wrap; gap: 5px 10px; margin-top: 6px; color: var(--ink-2); font-size: 11px; }
.lab-note { margin: 5px 0 0; color: var(--caramel-soft); font-size: 11px; line-height: 1.65; }
.lab-cg { width: 100%; max-height: 220px; border-radius: 12px; object-fit: cover; }
.customer .cc {
  margin-top: 4px;
  color: var(--ink-2);
  font-size: 12px;
  line-height: 1.6;
}
.customer-story {
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px dashed var(--line);
  font-size: 12px;
  line-height: 1.65;
}
.collect-row {
  padding: 6px 0;
  border-top: 1px dashed var(--line);
}
.cg-gallery{display:grid;grid-template-columns:1fr 1fr;gap:10px}.cg-card{display:block;width:100%;padding:0;text-align:left;color:var(--caramel);font:inherit;cursor:pointer}.cg-card:disabled{cursor:default}.cg-card .im{height:175px}.cg-card .im img{object-fit:cover}.cg-card .cp{display:grid;gap:3px;padding:7px 9px 9px}.cg-lightbox{position:fixed;inset:0;z-index:700;display:grid;grid-template-rows:minmax(0,1fr) auto;justify-items:center;align-items:center;padding:24px 14px max(22px,env(safe-area-inset-bottom));background:#150f0ceF;color:#fffaf1;font-size:13px}.cg-lightbox img{width:100%;height:100%;object-fit:contain;min-height:0}.cg-lightbox-close{position:absolute;top:max(12px,env(safe-area-inset-top));right:14px;z-index:1;width:44px;height:44px;border:0;border-radius:50%;background:#fff2;color:white;font-size:19px}
</style>

<style scoped>
.hint {
  margin-top: 3px;
  font-size: 11px;
  color: var(--ink-2);
  opacity: 0.85;
}
</style>
