<template>
  <button
    class="relative bg-gray-100 p-2 shadow border-2 rounded-md flex flex-col justify-center hover:shadow-lg hover:border-indigo-700 focus:outline-none"
    :class="[selected && 'shadow-lg border-indigo-700']"
    @click="select"
    @mouseenter="loaded && player.play()"
    @mouseleave="loaded && player.stop()"
  >
    <loading v-if="!loaded" />
    <h1 v-else class="text-2xl tracking-wider font-mono mx-auto">
      {{ sound.title }}
    </h1>
    <badge class="absolute -right-1 -top-1">{{ sound.prankCount }}</badge>
  </button>
</template>

<script>
import { Howl, Howler } from 'howler';
import Badge from './Badge.vue';
import Loading from './Loading.vue';
export default {
  components: { Badge, Loading },
  data: () => ({
    player: null,
    loaded: false,
  }),
  props: ['sound', 'selected'],
  emits: ['pick'],
  mounted() {
    this.player = new Howl({
      src: [this.sound.url],
      preload: true,
      onload: () => (this.loaded = true),
      volume: 1,
    });
  },
  methods: {
    select() {
      if (!this.loaded) return;
      this.$emit('pick', this.sound.url);
      Howler.stop();
      this.player.play();
    },
  },
};
</script>

<style></style>
