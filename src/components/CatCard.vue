<template>
  <article class="cat-card" v-highlight-on-hover="'#eefcff'" @click="emit('open-profile', cat.id)">
    <img :src="cat.imageUrl" :alt="`Котик ${cat.name}`" class="cat-photo" />
    <div class="cat-content">
      <h3>{{ cat.name }}</h3>
      <p>Возраст: {{ formatAge(cat.age) }}</p>
      <p>Характер: {{ temperLabel(cat.temper) }}</p>
      <p>Сильные стороны: {{ cat.traits.join(', ') }}</p>
      <button class="adopt-btn" @click.stop="emit('adopt', cat)">Хочу взять домой</button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { vHighlightOnHover } from '../directives/highlightOnHover';
import { formatAge, temperLabel } from '../utils/catHelpers';
import type { Cat } from '../types/cat';

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

.adopt-btn {
  margin-top: 8px;
  border: none;
  border-radius: 8px;
  background: #ff9c6e;
  color: #fff;
  padding: 8px 12px;
}
</style>
