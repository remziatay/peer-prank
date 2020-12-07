<template>
  <div
    class="flex-1 min-w-0 pb-3 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    <loading v-if="!sounds.length" />
    <sound-box
      v-else
      v-for="snd in sounds"
      :key="snd.url"
      :sound="snd"
      @pick="$emit('update:sound', $event)"
      :selected="snd.url === sound"
    ></sound-box>
  </div>
</template>

<script>
import Loading from './Loading.vue';
import SoundBox from './SoundBox.vue';

export default {
  components: { SoundBox, Loading },
  props: ['sounds', 'sound'],
  emits: ['update:sound'],
};
</script>

<style></style>
