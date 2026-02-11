<template>
  <aside class="shelter-overview">
    <h2>Классический script компонент</h2>
    <p>Сообщение (this.something): {{ this.something }}</p>
    <p>Глубокое свойство: {{ this.state.property.foo.bar.baz }}</p>
    <p>Котиков доступно: {{ this.state.stats.available.cats }}</p>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { ShelterState } from '../types/cat';

export default defineComponent({
  name: 'ShelterOverview',
  props: {
    state: {
      type: Object as PropType<ShelterState>,
      required: true
    }
  },
  data() {
    return {
      something: 'Options API демонстрирует доступ через this'
    };
  }
});
</script>

<style scoped>
.shelter-overview {
  border: 1px dashed #8f8f8f;
  border-radius: 8px;
  padding: 12px;
}
</style>
