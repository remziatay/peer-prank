<template>
  <button
    class="relative bg-gray-100 p-2 shadow border-2 rounded-md flex flex-col justify-center hover:shadow-lg hover:border-indigo-700 focus:outline-none"
    :class="[selected && 'shadow-lg border-indigo-700']"
    @click="select"
    @mouseenter="player.play()"
    @mouseleave="player.stop()"
  >
    <h1 class="text-2xl tracking-wider font-mono mx-auto">
      {{ sound.title }}
    </h1>
    <badge class="absolute -right-1 -top-1">{{ sound.prankCount }}</badge>
  </button>
</template>

<script>
import { Howl, Howler } from 'howler';
import Badge from './Badge.vue';
export default {
  components: { Badge },
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
  methods: {
    select() {
      this.$emit('pick', this.sound.url);
      Howler.stop();
      this.player.play();
    },
  },
};
</script>

<style></style>
