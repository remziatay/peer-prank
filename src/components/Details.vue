<template>
  <div class="px-5 lg:px-3 pt-3 overflow-auto grid gap-4">
    <toggle v-model="detailsInput.tryFullscreen">Try going fullscreen</toggle>
    <toggle v-model="detailsInput.leaveGuard"
      >Ask confirmation when trying to leave</toggle
    >
  </div>
</template>

<script>
import Toggle from './Toggle.vue';
export default {
  components: { Toggle },
  props: ['details'],
  emits: ['update:details'],
  data() {
    return { detailsInput: { ...this.details } };
  },
  watch: {
    detailsInput: {
      handler(newVal) {
        this.$emit('update:details', newVal);
      },
      deep: true,
    },
  },
};
</script>

<style lang="postcss" scoped></style>
