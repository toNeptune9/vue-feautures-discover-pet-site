import { computed, defineComponent, h } from 'vue';

export default defineComponent({
  name: 'StatusBadge',
  props: {
    label: {
      type: String,
      required: true
    },
    tone: {
      type: String as () => 'success' | 'warning' | 'neutral',
      default: 'neutral'
    }
  },
  setup(props) {
    const bgColor = computed(() => {
      if (props.tone === 'success') return '#e8f7ee';
      if (props.tone === 'warning') return '#fff4e5';
      return '#eef2ff';
    });

    const textColor = computed(() => {
      if (props.tone === 'success') return '#1c7c45';
      if (props.tone === 'warning') return '#a15a00';
      return '#3843a3';
    });

    return () =>
      h(
        'span',
        {
          class: 'status-badge',
          style: {
            display: 'inline-block',
            padding: '4px 10px',
            borderRadius: '999px',
            backgroundColor: bgColor.value,
            color: textColor.value,
            fontWeight: '600',
            fontSize: '12px'
          }
        },
        props.label
      );
  }
});
