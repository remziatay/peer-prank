<template>
  <button
    class="p-2 shadow border-2 rounded-md flex flex-col gap-3 hover:shadow-lg hover:bg-green-50 focus:outline-none"
    @click="player.play()"
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
  props: ['sound'],
  mounted() {
    this.player = new Howl({
      src: [this.sound.url],
      html5: true,
      preload: false,
      volume: 1,
    });
  },
};
</script>

<style></style>
