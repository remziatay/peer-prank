<template>
  <div class="home">
    <div class="flex w-full max-w-6xl">
      <div class="" :style="{ flex: '0 0 max-content' }">
        CHOOSE WHAT YOU WANT
      </div>
      <div
        id="grid"
        class="flex-auto grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <sound-box
          v-for="sound in sounds"
          :key="sound.url"
          :sound="sound"
        ></sound-box>
      </div>
    </div>
  </div>
</template>

<script>
import SoundBox from '@/components/SoundBox.vue';
/* import { firestore } from '../firebase'; */
import soundsTemp from '../soundsTemp.js';

export default {
  name: 'Home',
  data: () => ({
    sounds: [],
  }),
  components: {
    SoundBox,
  },
  mounted() {
    // Keep sounds local for now development
    this.sounds = soundsTemp;
    /* firestore
      .collection('/sounds')
      .get()
      .then(res => res.docs.map(doc => doc.data()))
      .then(sounds => (this.sounds = sounds.sort((a, b) => a.title > b.title))); */
  },
};
</script>

<style scoped></style>
