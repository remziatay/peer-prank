<template>
  <div
    class="px-3 pt-2 flex-1 min-w-0 overflow-auto grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
  >
    <sound-box
      v-for="snd in sounds"
      :key="snd.url"
      :sound="snd"
      @pick="$emit('update:sound', $event)"
      :selected="snd.url === sound"
    ></sound-box>
  </div>
</template>

<script>
import SoundBox from './SoundBox.vue';

export default {
  components: { SoundBox },
  props: ['sounds', 'sound'],
  emits: ['update:sound'],
};
</script>

<style></style>
