<template>
  <label>
    <span class="mr-2"><slot /></span>
    <input
      class="rounded-lg appearance-none bg-indigo-400 h-3"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      @input="$emit('update:modelValue', parseFloat($event.target.value))"
    />
  </label>
</template>

<script>
export default {
  props: {
    modelValue: Number,
    min: { default: 0 },
    max: { default: 1 },
    step: { default: 0.1 },
  },
};
</script>
