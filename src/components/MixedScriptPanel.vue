<template>
  <section class="mixed-panel">
    <h2>Mixed scripts component</h2>
    <p>setup counter: {{ counter }}</p>
    <button @click="counter++">Increment</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MixedScriptPanel',
  inheritAttrs: false
});
</script>

<style scoped>
.mixed-panel {
  margin-top: 12px;
  padding: 12px;
  background: #f7f7ff;
  border-radius: 8px;
}
</style>
