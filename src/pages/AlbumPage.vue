<script setup>
import { computed } from 'vue';
import { PHOTOS } from '../data';
import { state } from '../store';

defineEmits(['close']);

const items = computed(() =>
  Object.keys(PHOTOS).map((id) => ({ id, ...PHOTOS[id], owned: state.photos.includes(id) }))
);
const ownedCount = computed(() => state.photos.length);
</script>

<template>
  <div class="mask" @click.self="$emit('close')">
    <div class="sheet">
      <div class="sheet-head between">
        <div>
          <div class="t serif">友情相册</div>
          <div class="small muted">{{ ownedCount }} / {{ items.length }} 张</div>
        </div>
        <button class="btn ghost" type="button" @click="$emit('close')">收起</button>
      </div>
      <div class="sheet-body">
        <div class="photos">
          <div v-for="p in items" :key="p.id" class="photo">
            <div class="im">
              <img v-if="p.owned && p.img" :src="p.img" :alt="p.title" />
              <span v-else-if="p.owned" style="font-size: 12px; color: var(--caramel-soft)">
                未冲印
              </span>
              <span v-else style="font-size: 20px; opacity: 0.35">?</span>
            </div>
            <div class="cp">
              <div class="ti">{{ p.owned ? p.title : '还没发生' }}</div>
              <div class="cc">{{ p.owned ? p.caption : '继续经营，它会出现' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
