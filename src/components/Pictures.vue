<template>
  <div
    class="px-5 lg:px-3 pt-3 flex-1 min-w-0 overflow-auto grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
  >
    <button
      v-for="pic in pictures"
      class="relative flex img bg-center bg-no-repeat bg-cover h-64 rounded shadow hover:scale-105 transform focus:outline-none"
      :class="pic.url === picture && 'selected'"
      :key="pic.url"
      :style="{ backgroundImage: `url(${pic.url})` }"
      @click="$emit('update:picture', pic.url)"
    >
      <div
        class="self-end w-full  bg-black bg-opacity-70 text-indigo-200 font-mono tracking-wide uppercase text-xl h-1/6 flex items-center justify-center"
      >
        {{ pic.title }}
      </div>
      <badge :classes="'absolute -right-1 -top-1'">{{ pic.prankCount }}</badge>
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
</style>
