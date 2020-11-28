<template>
  <span
    class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-50 bg-indigo-600 rounded-full"
    :class="classes"
  >
    <slot />
  </span>
</template>
<script>
export default {
  props: ['classes'],
};
</script>
