import { computed, defineComponent, h, type PropType } from 'vue';
import type { Cat } from '../types/cat';

// Render-only ("vapor-like") TS component: no SFC template, only TypeScript render.
export default defineComponent({
  name: 'VaporNote',
  props: {
    cats: {
      type: Array as PropType<Cat[]>,
      required: true
    }
  },
  setup(props) {
    const energeticCats = computed(() => props.cats.filter((cat) => cat.temper === 'playful').length);

    return () =>
      h('section', { class: 'vapor-note' }, [
        h('h2', 'TS render component (vapor style)'),
        h('p', `Playful cats today: ${energeticCats.value}`),
        h('p', 'This component is written completely in .ts using a render function.')
      ]);
  }
});
