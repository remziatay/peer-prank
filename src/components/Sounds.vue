<template>
  <loading v-if="!sounds.length" />
  <div
    v-else
    class="flex-1 min-w-0 pb-3 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    <sound-box
      v-for="snd in sounds"
      :key="snd.url"
      :sound="snd"
      @pick="$emit('update:sound', $event)"
      :selected="snd.url === sound?.url"
    ></sound-box>
  </div>
</template>

<script>
import { getSounds } from '../firebase';
import Loading from './Loading.vue';
import SoundBox from './SoundBox.vue';

export default {
  components: { SoundBox, Loading },
  data: () => ({
    sounds: [],
  }),
  props: ['sound'],
  emits: ['update:sound'],
  async mounted() {
    this.sounds = (await getSounds()).sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  },
};
</script>

<style></style>
