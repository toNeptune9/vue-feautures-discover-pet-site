<template>
  <aside class="shelter-overview">
    <h2>Classic script component</h2>
    <p>Message (this.something): {{ this.something }}</p>
    <p>Deep property: {{ this.state.property.foo.bar.baz }}</p>
    <p>Available cats: {{ this.state.stats.available.cats }}</p>
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
      something: 'Options API demonstrates access through this'
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
