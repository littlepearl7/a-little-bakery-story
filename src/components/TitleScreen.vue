<script setup>
import { computed, onMounted, ref } from 'vue';
import {
  autoSaveText, exportSaveText, hasSave, importSaveText, inspectSaveText, load, loadManualSave, MANUAL_SAVE_SLOTS, state,
  manualSaveText, reset, saveManual, startGame,
} from '../store';
import {
  cloudSaveAvailable, createRecoveryCode, previewCloudSave, putCloudSave, readCloudSave,
} from '../cloudSave';
import { art } from '../data';
import CodexPage from '../pages/CodexPage.vue';

const props = defineProps({ inGame: { type: Boolean, default: false } });
const emit = defineEmits(['enter', 'close', 'title', 'collection']);
const screen = ref(props.inGame ? 'settings' : 'cover');
const confirmNew = ref(false);
const pendingLocal = ref(null);
const pendingManualWrite = ref(null);
const pendingCloud = ref(null);
const cloudCode = ref('');
const cloudRevision = ref(null);
const feedback = ref('');
const copied = ref(false);
const fileInput = ref(null);
const saveRefresh = ref(0);

const hasAutosave = computed(() => (saveRefresh.value, hasSave()));
const manualSlots = computed(() => {
  saveRefresh.value;
  return Array.from({ length: MANUAL_SAVE_SLOTS }, (_, index) => {
    const slot = index + 1;
    const inspected = inspectSaveText(manualSaveText(slot));
    return { slot, preview: inspected.ok ? inspected.preview : null };
  });
});
const cloudEnabled = cloudSaveAvailable;

onMounted(() => {
  if (!props.inGame && !load()) loadManualSave(false);
});

const leaving = ref(false);

/** 封面淡出后再进游戏，避免硬切 */
function leaveTo(handler) {
  if (leaving.value) return;
  leaving.value = true;
  setTimeout(handler, 420);
}

function startPlay() {
  leaveTo(() => {
    startGame();
    emit('enter', {});
  });
}

function continueGame() {
  if (leaving.value) return;
  if (!load()) return say('没有可继续的本地自动存档。');
  startPlay();
}

function newGame() {
  if (hasSave() && !confirmNew.value) {
    confirmNew.value = true;
    return;
  }
  if (!load()) loadManualSave(false);
  reset();
  state.storyChoices = {};
  confirmNew.value = false;
  startPlay();
}

function readManual(slot) {
  const text = manualSaveText(slot);
  const inspected = inspectSaveText(text);
  if (!inspected.ok) return say('这个本地存档位没有可读取的存档。');
  pendingLocal.value = { text, preview: inspected.preview };
}

function readAuto() {
  const text = autoSaveText();
  const inspected = inspectSaveText(text);
  if (!inspected.ok) return say('没有可读取的本地自动存档。');
  pendingLocal.value = { text, preview: inspected.preview };
}

async function readFile(event) {
  const file = event.target.files?.[0];
  event.target.value = '';
  if (!file) return;
  const text = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('无法读取存档文件。'));
    reader.readAsText(file);
  }).catch((error) => {
    say(error.message);
    return '';
  });
  if (!text) return;
  const inspected = inspectSaveText(text);
  if (!inspected.ok) return say(inspected.message);
  pendingLocal.value = { text, preview: inspected.preview };
}

function confirmLocalLoad() {
  if (!pendingLocal.value) return;
  const result = importSaveText(pendingLocal.value.text);
  if (!result.ok) return say(result.message);
  pendingLocal.value = null;
  saveRefresh.value++;
  startPlay();
}

function downloadSave() {
  const blob = new Blob([exportSaveText()], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = '林记烘焙存档.json';
  link.click();
  URL.revokeObjectURL(url);
  say('存档文件已导出。');
}

function requestManualSave(slot) {
  if (manualSlots.value.find((item) => item.slot === slot)?.preview) {
    pendingManualWrite.value = slot;
    return;
  }
  backupLocal(slot);
}

function backupLocal(slot) {
  const saved = saveManual(slot);
  pendingManualWrite.value = null;
  if (saved) saveRefresh.value++;
  say(saved ? `本地存档位 ${slot} 已保存。` : '浏览器无法写入本地存档。');
}

async function checkCloud() {
  if (!cloudEnabled) return false;
  if (!cloudCode.value.trim()) {
    say('先输入云存档恢复码。');
    return false;
  }
  feedback.value = '正在检查云存档…';
  try {
    pendingCloud.value = await previewCloudSave(cloudCode.value);
    cloudRevision.value = pendingCloud.value.revision;
    feedback.value = '已找到云存档，请核对进度后再恢复或覆盖。';
    return true;
  } catch (error) {
    pendingCloud.value = error.data?.meta || null;
    if (error.status === 404) {
      cloudRevision.value = null;
      feedback.value = '这个恢复码还没有云存档，可以创建新云档。';
      return false;
    }
    feedback.value = error.message;
    return false;
  }
}

async function uploadCloud() {
  if (!cloudEnabled) return say('云存档服务暂不可用。');
  if (!cloudCode.value.trim()) cloudCode.value = createRecoveryCode();
  if (!pendingCloud.value) {
    const exists = await checkCloud();
    if (exists) return;
  }
  if (pendingCloud.value) return say('请先核对云端进度，再点击“确认覆盖云档”。');
  feedback.value = '正在备份到云端…';
  try {
    const saved = await putCloudSave(cloudCode.value, exportSaveText(), cloudRevision.value);
    cloudRevision.value = saved.revision;
    pendingCloud.value = null;
    feedback.value = saved.created ? '云存档已创建。请立即复制恢复码，换设备时需要用它读取。' : '云存档已更新。';
  } catch (error) {
    pendingCloud.value = error.data?.meta || null;
    if (pendingCloud.value) cloudRevision.value = pendingCloud.value.revision;
    feedback.value = error.status === 409
      ? '云存档已有较新进度，请先核对后确认覆盖。'
      : error.message;
  }
}

async function confirmCloudOverwrite() {
  if (!pendingCloud.value) return;
  const revision = pendingCloud.value.revision;
  feedback.value = '正在更新云端存档…';
  try {
    const saved = await putCloudSave(cloudCode.value, exportSaveText(), revision);
    cloudRevision.value = saved.revision;
    pendingCloud.value = null;
    feedback.value = '云存档已更新。';
  } catch (error) {
    pendingCloud.value = error.data?.meta || null;
    if (pendingCloud.value) cloudRevision.value = pendingCloud.value.revision;
    feedback.value = error.status === 409
      ? '云存档在预览后已有更新，请重新核对后再确认覆盖。'
      : error.message;
  }
}

async function restoreCloud() {
  if (!pendingCloud.value) return;
  feedback.value = '正在读取云存档…';
  try {
    const result = await readCloudSave(cloudCode.value, pendingCloud.value.revision);
    const inspected = inspectSaveText(result.save);
    if (!inspected.ok) throw new Error('云端存档内容无效。');
    pendingLocal.value = { text: result.save, preview: inspected.preview };
    pendingCloud.value = null;
    feedback.value = '已将云档载入预览，请确认后恢复。';
  } catch (error) {
    pendingCloud.value = error.data?.meta || null;
    if (pendingCloud.value) cloudRevision.value = pendingCloud.value.revision;
    feedback.value = error.status === 409
      ? '云档在预览后已有更新，请重新核对。'
      : error.message;
  }
}

async function copyCode() {
  try {
    await navigator.clipboard.writeText(cloudCode.value);
    copied.value = true;
  } catch (error) {
    copied.value = false;
    say('请长按恢复码并手动复制。');
  }
}

function say(message) {
  feedback.value = message;
}

function showCollection() {
  if (!load()) loadManualSave(false);
  screen.value = 'collection';
}

function back() {
  pendingLocal.value = null;
  pendingCloud.value = null;
  feedback.value = '';
  if (props.inGame) emit('close');
  else screen.value = 'menu';
}

function leaveSettings() {
  if (props.inGame) emit('close');
  else screen.value = 'menu';
}
</script>

<template>
  <div v-if="!inGame" class="title-screen" :class="{ leaving }">
    <div v-if="screen === 'cover'" class="title-frame" role="button" tabindex="0" aria-label="点击任意位置开始游戏" @click="screen = 'menu'" @keydown.enter="screen = 'menu'" @keydown.space.prevent="screen = 'menu'">
      <img :src="art('cover.webp')" alt="林记烘焙游戏封面" />
      <div class="title-prompt">点击任意位置开始游戏</div>
    </div>

    <div v-else-if="screen === 'menu'" class="title-frame title-menu">
      <img :src="art('cover-options.webp')" alt="林记烘焙主菜单" />
      <button class="title-hit title-hit-continue" type="button" :disabled="!hasAutosave" aria-label="继续游戏" @click="continueGame"></button>
      <button class="title-hit title-hit-new" type="button" aria-label="新的开始" @click="newGame"></button>
      <button class="title-hit title-hit-load" type="button" aria-label="读取存档" @click="screen = 'load'; feedback = ''"></button>
      <button class="title-hit title-hit-settings" type="button" aria-label="设置" @click="screen = 'settings'; feedback = ''"></button>
      <button class="title-hit title-hit-collection" type="button" aria-label="查看收集" @click="showCollection"></button>
      <div class="title-screen-reader" aria-live="polite">{{ hasAutosave ? '有本地自动存档' : '暂无本地自动存档' }}</div>
    </div>

    <div v-else-if="screen === 'collection'" class="title-collection">
      <header><h1>查看收集</h1><button class="title-back" type="button" @click="screen = 'menu'">返回主菜单</button></header>
      <div class="title-collection-body"><CodexPage initial-segment="collection" /></div>
    </div>

    <div v-if="screen === 'settings' || screen === 'load'" class="title-panel-mask">
      <section class="title-panel" :aria-label="screen === 'settings' ? '设置和存档' : '读取存档'">
        <header class="title-panel-head">
          <button class="title-back" type="button" @click="back">← 返回</button>
          <h1>{{ screen === 'settings' ? '设置与存档' : '读取存档' }}</h1>
          <button v-if="!inGame" class="title-back" type="button" @click="leaveSettings">主菜单</button>
        </header>
        <div class="title-panel-body">
          <div v-if="screen === 'load'" class="save-group">
            <h2>本地存档</h2>
            <p class="save-note">自动存档随经营进度保存；三个手动槽位可分别保留不同进度。</p>
            <button class="save-action" type="button" :disabled="!hasAutosave" @click="readAuto">预览最近自动存档</button>
            <div class="manual-slots">
              <div v-for="slot in manualSlots" :key="slot.slot" class="manual-slot">
                <div class="manual-slot-info">
                  <strong>手动槽位 {{ slot.slot }} · {{ slot.preview ? '已保存' : '空槽位' }}</strong>
                  <small v-if="slot.preview">M{{ slot.preview.month }} · 第 {{ slot.preview.day }} 个经营日 · ¥{{ slot.preview.cash.toLocaleString() }}</small>
                  <small v-if="slot.preview?.savedAt">保存于 {{ new Date(slot.preview.savedAt).toLocaleString() }}</small>
                </div>
                <button class="save-action" type="button" :disabled="!slot.preview" @click="readManual(slot.slot)">预览并读取</button>
              </div>
            </div>
            <button class="save-action" type="button" @click="fileInput?.click()">从 JSON 文件导入</button>
          </div>

          <div v-else class="save-group">
            <h2>本地存档</h2>
            <p class="save-note">自动存档会持续更新；手动槽位保存在当前浏览器，可以保留不同经营进度。</p>
            <div class="manual-slots">
              <div v-for="slot in manualSlots" :key="slot.slot" class="manual-slot">
                <div class="manual-slot-info">
                  <strong>手动槽位 {{ slot.slot }} · {{ slot.preview ? '已保存' : '空槽位' }}</strong>
                  <small v-if="slot.preview">M{{ slot.preview.month }} · 第 {{ slot.preview.day }} 个经营日 · ¥{{ slot.preview.cash.toLocaleString() }}</small>
                  <small v-if="slot.preview?.savedAt">保存于 {{ new Date(slot.preview.savedAt).toLocaleString() }}</small>
                </div>
                <button v-if="pendingManualWrite !== slot.slot" class="save-action primary" type="button" @click="requestManualSave(slot.slot)">{{ slot.preview ? '覆盖这个槽位' : '保存到此槽位' }}</button>
                <div v-else class="manual-slot-confirm">
                  <span>确认覆盖槽位 {{ slot.slot }}？</span>
                  <button class="save-action primary" type="button" @click="backupLocal(slot.slot)">确认保存</button>
                  <button class="save-action" type="button" @click="pendingManualWrite = null">取消</button>
                </div>
              </div>
            </div>
            <button class="save-action" type="button" @click="downloadSave">导出存档文件</button>
            <button class="save-action" type="button" @click="fileInput?.click()">导入存档文件</button>

            <h2>云存档</h2>
            <p class="save-note">手动备份到云端。恢复码可以在另一台设备读取同一份存档。</p>
            <label class="save-label" for="recovery-code">恢复码</label>
            <input id="recovery-code" v-model="cloudCode" class="save-input" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="输入或创建恢复码" />
            <button class="save-action" type="button" :disabled="!cloudEnabled" @click="checkCloud">检查云存档</button>
            <button class="save-action primary" type="button" :disabled="!cloudEnabled" @click="uploadCloud">备份到云端</button>
            <p v-if="!cloudEnabled" class="save-note">云存档服务暂不可用，请稍后再试。</p>
            <p v-if="feedback" class="save-feedback" role="status">{{ feedback }}</p>
            <div v-if="cloudCode && cloudCode.length === 20" class="recovery-code">
              <span>{{ cloudCode }}</span>
              <button type="button" @click="copyCode">{{ copied ? '已复制' : '复制恢复码' }}</button>
            </div>
            <div v-if="pendingCloud" class="save-preview">
              <strong>云端存档预览</strong>
              <span>M{{ pendingCloud.month }} · 第 {{ pendingCloud.day }} 个经营日 · ¥{{ Number(pendingCloud.cash || 0).toLocaleString() }}</span>
              <small>云端更新于 {{ new Date(pendingCloud.updatedAt).toLocaleString() }}</small>
              <button class="save-action" type="button" @click="restoreCloud">读取这份云档</button>
              <button class="save-action primary" type="button" @click="confirmCloudOverwrite">确认用当前进度覆盖云档</button>
            </div>
          </div>

          <div v-if="screen === 'load'" class="save-group">
            <h2>云存档</h2>
            <p class="save-note">输入另一台设备保存时使用的恢复码，先查看进度，再确认读取。</p>
            <label class="save-label" for="recovery-code-load">恢复码</label>
            <input id="recovery-code-load" v-model="cloudCode" class="save-input" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="输入恢复码" />
            <button class="save-action" type="button" :disabled="!cloudEnabled" @click="checkCloud">检查云存档</button>
            <p v-if="!cloudEnabled" class="save-note">云存档服务暂不可用，请稍后再试。</p>
            <p v-if="feedback" class="save-feedback" role="status">{{ feedback }}</p>
            <div v-if="pendingCloud" class="save-preview">
              <strong>云端存档预览</strong>
              <span>M{{ pendingCloud.month }} · 第 {{ pendingCloud.day }} 个经营日 · ¥{{ Number(pendingCloud.cash || 0).toLocaleString() }}</span>
              <small>云端更新于 {{ new Date(pendingCloud.updatedAt).toLocaleString() }}</small>
              <button class="save-action primary" type="button" @click="restoreCloud">确认读取这份云档</button>
            </div>
          </div>

          <input ref="fileInput" class="save-file" type="file" accept="application/json,.json" @change="readFile" />
          <div v-if="pendingLocal" class="save-preview">
            <strong>存档预览</strong>
            <span>M{{ pendingLocal.preview.month }} · 第 {{ pendingLocal.preview.day }} 个经营日 · ¥{{ pendingLocal.preview.cash.toLocaleString() }}</span>
            <small>{{ pendingLocal.preview.savedAt ? new Date(pendingLocal.preview.savedAt).toLocaleString() : '保存时间未知' }}</small>
            <button class="save-action primary" type="button" @click="confirmLocalLoad">确认读取并继续</button>
            <button class="save-action" type="button" @click="pendingLocal = null">取消</button>
          </div>
        </div>
        <footer v-if="inGame" class="title-panel-foot"><button class="save-action" type="button" @click="$emit('close')">返回游戏</button></footer>
      </section>
    </div>

    <div v-if="confirmNew" class="title-panel-mask confirm-mask">
      <section class="confirm-card" role="dialog" aria-modal="true" aria-labelledby="new-game-confirm">
        <h2 id="new-game-confirm">开始新的经营？</h2>
        <p>本地自动存档会替换。手动备份和已收集内容会保留。</p>
        <button class="save-action primary" type="button" @click="newGame">开始新的游戏</button>
        <button class="save-action" type="button" @click="confirmNew = false">继续考虑</button>
      </section>
    </div>

    <p v-if="feedback && screen === 'menu'" class="title-toast" role="status">{{ feedback }}</p>
  </div>

  <div v-else class="save-center-mask">
    <section class="title-panel save-center">
      <header class="title-panel-head">
        <h1>设置与存档</h1>
        <button class="title-close" type="button" aria-label="关闭设置" @click="$emit('close')">✕</button>
      </header>
      <div class="title-panel-body">
        <h2>本地存档</h2>
        <p class="save-note">自动存档会持续更新；手动槽位保存在当前浏览器，可以保留不同经营进度。</p>
        <div class="manual-slots">
          <div v-for="slot in manualSlots" :key="slot.slot" class="manual-slot">
            <div class="manual-slot-info">
              <strong>手动槽位 {{ slot.slot }} · {{ slot.preview ? '已保存' : '空槽位' }}</strong>
              <small v-if="slot.preview">M{{ slot.preview.month }} · 第 {{ slot.preview.day }} 个经营日 · ¥{{ slot.preview.cash.toLocaleString() }}</small>
              <small v-if="slot.preview?.savedAt">保存于 {{ new Date(slot.preview.savedAt).toLocaleString() }}</small>
            </div>
            <button v-if="pendingManualWrite !== slot.slot" class="save-action primary" type="button" @click="requestManualSave(slot.slot)">{{ slot.preview ? '覆盖这个槽位' : '保存到此槽位' }}</button>
            <div v-else class="manual-slot-confirm">
              <span>确认覆盖槽位 {{ slot.slot }}？</span>
              <button class="save-action primary" type="button" @click="backupLocal(slot.slot)">确认保存</button>
              <button class="save-action" type="button" @click="pendingManualWrite = null">取消</button>
            </div>
          </div>
        </div>
        <button class="save-action" type="button" @click="downloadSave">导出存档文件</button>
        <button class="save-action" type="button" @click="fileInput?.click()">导入存档文件</button>
        <h2>云存档</h2>
        <p class="save-note">手动备份到云端。恢复码可以在另一台设备读取同一份存档。</p>
        <label class="save-label" for="recovery-code-game">恢复码</label>
        <input id="recovery-code-game" v-model="cloudCode" class="save-input" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="输入或创建恢复码" />
        <button class="save-action" type="button" :disabled="!cloudEnabled" @click="checkCloud">检查云存档</button>
        <button class="save-action primary" type="button" :disabled="!cloudEnabled" @click="uploadCloud">备份到云端</button>
        <p v-if="!cloudEnabled" class="save-note">云存档服务暂不可用，请稍后再试。</p>
        <p v-if="feedback" class="save-feedback" role="status">{{ feedback }}</p>
        <div v-if="cloudCode && cloudCode.length === 20" class="recovery-code">
          <span>{{ cloudCode }}</span><button type="button" @click="copyCode">{{ copied ? '已复制' : '复制恢复码' }}</button>
        </div>
        <div v-if="pendingCloud" class="save-preview">
          <strong>云端存档预览</strong>
          <span>M{{ pendingCloud.month }} · 第 {{ pendingCloud.day }} 个经营日 · ¥{{ Number(pendingCloud.cash || 0).toLocaleString() }}</span>
          <small>云端更新于 {{ new Date(pendingCloud.updatedAt).toLocaleString() }}</small>
          <button class="save-action primary" type="button" @click="restoreCloud">确认读取这份云档</button>
        </div>
        <div v-if="pendingLocal" class="save-preview">
          <strong>存档预览</strong>
          <span>M{{ pendingLocal.preview.month }} · 第 {{ pendingLocal.preview.day }} 个经营日 · ¥{{ pendingLocal.preview.cash.toLocaleString() }}</span>
          <small>{{ pendingLocal.preview.savedAt ? new Date(pendingLocal.preview.savedAt).toLocaleString() : '保存时间未知' }}</small>
          <button class="save-action primary" type="button" @click="confirmLocalLoad">确认读取并继续</button>
          <button class="save-action" type="button" @click="pendingLocal = null">取消</button>
        </div>
        <input ref="fileInput" class="save-file" type="file" accept="application/json,.json" @change="readFile" />
      </div>
      <footer class="title-panel-foot">
        <button class="save-action" type="button" @click="$emit('close')">返回游戏</button>
        <button class="save-action" type="button" @click="$emit('title')">返回标题</button>
      </footer>
    </section>
  </div>
</template>

<style scoped>
.title-screen,.save-center-mask{position:fixed;inset:0;z-index:600;background:#211810;display:grid;place-items:center;color:#593a24;font-family:inherit;transition:opacity .42s ease}
.title-screen.leaving{opacity:0;pointer-events:none}
.title-frame{position:relative;width:100vw;height:100vh;max-width:56.28vh;max-height:177.68vw;overflow:hidden;background:#f7ead7;outline:none}
@supports (height:100dvh){.title-frame{height:100dvh;max-width:56.28dvh}}
.title-frame>img{position:absolute;inset:0;width:100%;height:100%;object-fit:fill}
.title-prompt{position:absolute;left:0;right:0;bottom:1.4%;padding:8px 0;color:#fffaf0;font-size:12px;text-align:center;letter-spacing:.12em;text-shadow:0 1px 7px #382516}
.title-hit{position:absolute;left:49%;width:49%;min-height:44px;padding:0;border:0;background:transparent;cursor:pointer;touch-action:manipulation}
.title-hit:focus-visible{outline:2px solid #fff6dc;border-radius:14px;background:#fff2}
.title-hit:disabled{cursor:default;pointer-events:none}
.title-hit-continue{top:47%;height:6.5%}.title-hit-new{top:55.4%;height:6.5%}.title-hit-load{top:64%;height:6.5%}.title-hit-settings{top:72.7%;height:6.5%}.title-hit-collection{top:81.3%;height:6.5%}
.title-screen-reader{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
.title-collection{width:min(100%,480px);height:100%;max-height:100dvh;display:flex;flex-direction:column;overflow:hidden;background:#fbf5ec}.title-collection>header{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:calc(env(safe-area-inset-top,0px) + 8px) 14px 8px;border-bottom:1px solid #ead7c2}.title-collection h1{margin:0;color:#6b4a34;font-size:18px}.title-collection-body{overflow:auto;padding:12px 14px calc(env(safe-area-inset-bottom,0px) + 20px);-webkit-overflow-scrolling:touch}
.title-panel-mask{position:fixed;inset:0;z-index:5;display:grid;place-items:center;padding:16px;background:#21181085}
.title-panel{width:min(100%,480px);max-height:min(90dvh,780px);display:flex;flex-direction:column;overflow:hidden;border-radius:18px;background:#fbf5ec;box-shadow:0 16px 60px #1b100e88}
.title-panel-head{display:flex;align-items:center;justify-content:space-between;gap:10px;flex:0 0 auto;padding:12px 16px;border-bottom:1px solid #ead7c2;background:#fffaf2}
.title-panel-head h1{flex:1;margin:0;color:#6b4a34;font-size:18px;text-align:center}.title-panel-head h2{margin:0}
.title-back,.title-close{min-width:44px;min-height:44px;border:0;background:transparent;color:#6b4a34;font:inherit;cursor:pointer}
.title-panel-body{overflow:auto;padding:15px 17px 20px;-webkit-overflow-scrolling:touch}.save-group{display:grid;gap:8px}.save-group h2,.title-panel-body h2{margin:12px 0 0;color:#6b4a34;font-size:15px}.save-note,.save-feedback{margin:0;color:#806a58;font-size:12px;line-height:1.6}.save-feedback{padding:8px;border-radius:9px;background:#fff0dd;color:#6b4a34}
.save-action{width:100%;min-height:44px;padding:9px 12px;border:1px solid #e3c9ad;border-radius:11px;background:#fffdf8;color:#6b4a34;font:inherit;font-size:13px;text-align:center;cursor:pointer}.save-action.primary{border-color:#7d9273;background:#7d9273;color:#fff}.save-action:disabled{opacity:.46;cursor:default}
.save-label{margin-top:7px;font-size:12px;font-weight:700}.save-input{width:100%;min-height:46px;padding:10px 12px;border:1px solid #ddc5ab;border-radius:10px;background:white;color:#553a28;font:inherit;font-size:16px;letter-spacing:.12em;text-transform:uppercase}
.save-file{display:none}.save-preview{display:grid;gap:8px;margin-top:12px;padding:12px;border:1px solid #d9c4ab;border-radius:12px;background:#fffaf1;color:#6b4a34;font-size:13px}.save-preview small{color:#806a58}.recovery-code{display:grid;gap:7px;padding:12px;border:1px dashed #ae8d68;border-radius:12px;background:#fff9ec;text-align:center}.recovery-code span{font:700 16px/1.5 ui-monospace,monospace;letter-spacing:.12em;overflow-wrap:anywhere}.recovery-code button{min-height:44px;border:0;border-radius:9px;background:#eed9bf;color:#553a28;font:inherit}
.manual-slots{display:grid;gap:8px;margin:4px 0 10px}.manual-slot{display:grid;gap:8px;padding:10px;border:1px solid #ead7c2;border-radius:12px;background:#fffaf2}.manual-slot-info{display:grid;gap:3px;color:#6b4a34;font-size:12px}.manual-slot-info small{color:#806a58}.manual-slot-confirm{display:grid;gap:6px;color:#806a58;font-size:12px}
.title-panel-foot{padding:8px 16px max(10px,env(safe-area-inset-bottom));border-top:1px solid #ead7c2}.save-center-mask{z-index:500;padding:14px;background:#21181088}.save-center{width:min(100%,460px);max-height:90dvh}.title-toast{position:fixed;z-index:10;left:8%;right:8%;bottom:2%;margin:0;padding:10px;border-radius:10px;background:#fffaf0;color:#6b4a34;text-align:center;font-size:12px}.confirm-mask{z-index:8}.confirm-card{width:min(100%,360px);padding:20px;border-radius:16px;background:#fbf5ec;color:#6b4a34;box-shadow:0 12px 44px #1b100e88}.confirm-card h2{margin:0 0 8px;font-size:18px}.confirm-card p{margin:0 0 14px;color:#806a58;font-size:13px;line-height:1.65}.confirm-card .save-action+.save-action{margin-top:8px}
</style>
