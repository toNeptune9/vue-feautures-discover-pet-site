<template>
  <section class="filter-panel">
    <label>
      Поиск по имени
      <input v-model="queryModel" v-focus type="text" placeholder="Например, Луна" />
    </label>

    <label>
      Минимальный возраст
      <input v-model.number="ageModel" type="number" min="0" max="20" />
    </label>
  </section>
</template>

<script setup lang="ts">
const queryModel = defineModel<string>('query', { default: '' });
const ageModel = defineModel<number>('minAge', { default: 0 });

const vFocus = {
  mounted(el: HTMLInputElement) {
    el.focus();
  }
};
</script>

<style scoped>
.filter-panel {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
