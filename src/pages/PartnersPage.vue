<script setup>
import { computed, ref } from 'vue';
import { PARTNERS } from '../data';
import { actionInfo, canAutomateService, setServiceAssignments, state, staffList, doAction } from '../store';
import { faceOfName } from '../vn';

const notice = ref('');
const rows = computed(() => PARTNERS.map((partner) => {
  const joined = state.staff.includes(partner.id);
  return joined ? {
    id: partner.id,
    joined,
    name: partner.name,
    nick: partner.nick,
    role: partner.role,
    skillName: partner.skillName,
    skill: state.partnerSkill[partner.id] || 1,
    trust: Math.round(state.partnerTrust[partner.id] || 0),
    avatar: faceOfName(partner.name),
  } : { id: partner.id, joined };
}));
const coworkers = computed(() => staffList());
const canAuto = computed(() => canAutomateService());
const assignmentReady = computed(() => state.dayPhase === 'prep');

function assign(role, value) {
  setServiceAssignments({ ...state.staffAssignments, [role]: value || null });
  notice.value = '营业分工已保存。';
}

function toggleAuto(event) {
  if (!canAuto.value) return;
  setServiceAssignments({ ...state.staffAssignments, auto: event.target.checked });
  notice.value = event.target.checked ? '已启用全自动接待。' : '已切回手动接待。';
}

function action(id, role) {
  const info = actionInfo(id);
  if (!assignmentReady.value || info.disabled || state.ap < info.ap || (info.cost && state.cash < info.cost)) {
    notice.value = assignmentReady.value ? info.note : '请在营业前安排员工交流与培训。';
    return;
  }
  const ok = doAction(id, { partner: role });
  notice.value = ok ? (id === 'talk' ? '和伙伴聊了一会儿。' : '培训完成，专业能力提升。') : '暂时无法完成。';
}
</script>

<template>
  <div>
    <div class="card card-pad">
      <div class="between"><div><div class="h2" style="margin:0">林暖</div><div class="small muted">母亲 · 林记上一任经营者</div></div><span class="chip">家庭默契 {{ Math.round(state.momBond) }}</span></div>
      <p class="small muted" style="margin:7px 0 0">她每天提供 60 点免费产能。和妈妈的互动在店内进行。</p>
    </div>

    <div class="card card-pad team-card">
      <div class="between"><div class="h2" style="margin:0">伙伴档案</div><span class="small muted">已加入 {{ coworkers.length }} / {{ PARTNERS.length }}</span></div>
      <article v-for="partner in rows" :key="partner.id" class="partner-row">
        <div v-if="partner.joined" class="avatar real-avatar">
          <img v-if="partner.avatar" :src="partner.avatar" :alt="partner.name" />
          <span v-else>{{ partner.name.slice(0, 1) }}</span>
        </div>
        <div v-else class="avatar locked-avatar">?</div>
        <div class="partner-info">
          <template v-if="partner.joined">
            <div class="partner-title"><strong>{{ partner.name }}</strong><span class="chip">{{ partner.role }}</span></div>
            <div class="small muted">信赖 {{ partner.trust }} · {{ partner.skillName }}专业 Lv{{ partner.skill }}</div>
            <div class="partner-actions">
              <button class="btn" type="button" :disabled="!assignmentReady || state.ap < 1" @click="action('talk', partner.id)">员工交流 · 1 行动力</button>
              <button class="btn" type="button" :disabled="!assignmentReady || state.ap < 2 || state.cash < 400 || partner.skill >= 5" @click="action('train', partner.id)">培训 · 2 行动力 / ¥400</button>
            </div>
          </template>
          <template v-else>
            <strong>未解锁</strong>
            <div class="small muted">继续经营，等待伙伴加入林记。</div>
          </template>
        </div>
      </article>
    </div>

    <div class="card card-pad team-card">
      <div class="h2">营业分工</div>
      <p class="small muted">伙伴可以分担找蛋糕和打包。专业等级越高，负责工位的处理时间越短。</p>
      <label class="assignment"><span>找蛋糕</span><select :value="state.staffAssignments.picker || ''" :disabled="!assignmentReady" @change="assign('picker', $event.target.value)"><option value="">自己负责</option><option v-for="person in coworkers" :key="person.id" :value="person.id">{{ person.nick }} · Lv{{ state.partnerSkill[person.id] || 1 }}</option></select></label>
      <label class="assignment"><span>打包</span><select :value="state.staffAssignments.packer || ''" :disabled="!assignmentReady" @change="assign('packer', $event.target.value)"><option value="">自己负责</option><option v-for="person in coworkers" :key="person.id" :value="person.id" :disabled="person.id === state.staffAssignments.picker">{{ person.nick }} · Lv{{ state.partnerSkill[person.id] || 1 }}</option></select></label>
      <label v-if="canAuto" class="auto-toggle"><input type="checkbox" :checked="state.staffAssignments.auto" :disabled="!assignmentReady" @change="toggleAuto" /><span><strong>全自动接待</strong><small>员工完成找蛋糕、打包和递交；每天可挑战一项经营目标。</small></span></label>
      <div v-else class="locked-auto"><span class="locked-avatar">?</span><span class="small muted">全自动接待：店铺 Lv3，并有 3 位专业 Lv3 伙伴后开放。</span></div>
      <p v-if="notice" class="small muted" role="status">{{ notice }}</p>
    </div>
  </div>
</template>

<style scoped>
.team-card{margin-top:10px}.partner-row{display:flex;gap:11px;padding:12px 0;border-bottom:1px solid var(--line-soft)}.partner-row:last-child{border-bottom:0;padding-bottom:0}.avatar{width:48px;height:48px;flex:0 0 48px;border-radius:50%;overflow:hidden;display:grid;place-items:center}.real-avatar{background:var(--apricot);color:var(--caramel);font-size:18px;font-weight:700}.real-avatar img{width:100%;height:100%;object-fit:cover}.locked-avatar{background:#211f20;color:#fff;font-size:25px;font-weight:700}.partner-info{flex:1;min-width:0}.partner-title{display:flex;align-items:center;gap:6px;flex-wrap:wrap}.partner-title strong{font-size:14px}.partner-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:7px}.partner-actions .btn{min-height:40px;padding:6px 9px;font-size:11px}.assignment{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:8px 0;border-top:1px solid var(--line-soft);font-size:13px}.assignment select{max-width:65%;min-height:40px;padding:5px 8px;border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--caramel)}.auto-toggle{display:flex;align-items:flex-start;gap:10px;margin-top:10px;padding:10px;border-radius:10px;background:var(--apricot)}.auto-toggle input{width:20px;height:20px;accent-color:var(--sage)}.auto-toggle span{display:grid;gap:2px}.auto-toggle small{font-size:11px;color:var(--ink-2);line-height:1.5}.locked-auto{display:flex;align-items:center;gap:10px;margin-top:10px;padding:9px;border-radius:10px;background:#f5f1ed}.locked-auto .locked-avatar{width:34px;height:34px;flex-basis:34px;font-size:18px}
</style>
