<template>
  <div
    class="flex-1 pb-3 grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
  >
    <button
      v-for="pic in pictures"
      class="img relative flex bg-center bg-no-repeat bg-cover h-64 rounded shadow hover:scale-105 transform focus:outline-none"
      :class="pic.url === picture && 'selected'"
      :key="pic.url"
      :style="{ backgroundImage: `url(${pic.url})` }"
      @click="$emit('update:picture', pic.url)"
    >
      <div
        class="self-end w-full bg-black bg-opacity-70 text-indigo-200 font-mono tracking-wide uppercase text-xl h-1/6 flex items-center justify-center"
      >
        {{ pic.title }}
      </div>
      <badge class="absolute -right-1 -top-1">{{ pic.prankCount }}</badge>
    </button>
  </div>
</template>

<script>
import Badge from './Badge.vue';
export default {
  components: { Badge },
  props: ['pictures', 'picture'],
  emits: ['update:picture'],
};
</script>

<style lang="postcss" scoped>
.img:focus,
.img.selected {
  @apply ring-4 ring-indigo-700;
}
.img:last-child {
  margin-bottom: 1rem;
}
</style>
