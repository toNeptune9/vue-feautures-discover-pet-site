<template>
  <article class="cat-card" v-highlight-on-hover="'#eefcff'" @click="emit('open-profile', cat.id)">
    <img :src="cat.imageUrl" :alt="`Cat ${cat.name}`" class="cat-photo" />
    <div class="cat-content">
      <h3>{{ cat.name }}</h3>
      <p>Age: {{ formatAge(cat.age) }}</p>
      <p>Temper: {{ temperLabel(cat.temper) }}</p>
      <p>Traits: {{ cat.traits.join(', ') }}</p>
      <div class="badges-row">
        <StatusBadge :label="cat.temper" tone="neutral" />
      </div>
      <button class="adopt-btn" @click.stop="emit('adopt', cat)">Adopt me</button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { vHighlightOnHover } from '../directives/highlightOnHover';
import { formatAge, temperLabel } from '../utils/catHelpers';
import type { Cat } from '../types/cat';
import StatusBadge from './StatusBadge';

defineProps<{
  cat: Cat;
}>();

const emit = defineEmits<{
  adopt: [cat: Cat];
  'open-profile': [catId: number];
}>();
</script>

<style scoped>
.cat-card {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 12px;
  border: 1px solid #d7d7d7;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}

.cat-photo {
  width: 160px;
  height: 160px;
  object-fit: cover;
}

.cat-content {
  padding: 10px;
}

.badges-row {
  margin-top: 6px;
  margin-bottom: 8px;
}

.adopt-btn {
  margin-top: 8px;
  border: none;
  border-radius: 8px;
  background: #ff9c6e;
  color: #fff;
  padding: 8px 12px;
}
</style>
