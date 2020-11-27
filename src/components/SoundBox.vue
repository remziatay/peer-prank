<template>
  <button
    class="bg-gray-100 p-2 shadow border-2 rounded-md flex flex-col gap-3 hover:shadow-lg hover:border-indigo-700 focus:outline-none"
    :class="[selected && 'shadow-lg border-indigo-700']"
    @click="$emit('pick', sound.url) || player.play()"
    @mouseenter="player.play()"
    @mouseleave="player.stop()"
  >
    <h1 class="text-2xl tracking-wider font-mono mx-auto">
      {{ sound.title }}
    </h1>
    <p class="text-xs font-semibold ml-auto">
      Used in {{ sound.prankCount }} pranks.
    </p>
  </button>
</template>

<script>
import { Howl } from 'howler';
export default {
  data: () => ({
    player: null,
  }),
  props: ['sound', 'selected'],
  emits: ['pick'],
  mounted() {
    this.player = new Howl({
      src: [this.sound.url],
      preload: true,
      volume: 1,
    });
  },
};
</script>

<style></style>
