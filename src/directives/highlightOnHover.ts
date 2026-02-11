import type { Directive } from 'vue';

export const vHighlightOnHover: Directive<HTMLElement, string> = {
  mounted(el, binding) {
    const color = binding.value || '#ffecc2';
    const enter = () => {
      el.style.transition = 'background-color 0.2s ease';
      el.style.backgroundColor = color;
    };
    const leave = () => {
      el.style.backgroundColor = '';
    };

    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);

    (el as HTMLElement & { __leave?: () => void }).__leave = () => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    };
  },
  unmounted(el) {
    (el as HTMLElement & { __leave?: () => void }).__leave?.();
  }
};
