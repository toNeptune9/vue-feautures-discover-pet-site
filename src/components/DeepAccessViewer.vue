<template>
  <section class="deep-viewer">
    <h2>Deep access sample</h2>
    <p>property.second.smth.level4.value: {{ state.property.second.smth.level4.value }}</p>
  </section>
</template>

<script setup lang="ts">
interface DeepState {
  property: {
    second: {
      smth: {
        level4: {
          value: string;
        };
      };
    };
  };
}

defineProps<{
  state: DeepState;
}>();
</script>

<style scoped>
.deep-viewer {
  margin-top: 12px;
  border: 1px dashed #9ca3af;
  border-radius: 8px;
  padding: 12px;
}
</style>
