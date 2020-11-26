<template>
  <div class="home">
    <div
      class="flex w-full mx-auto max-w-screen-2xl md:px-6 py-2 gap-2 max-h-full"
    >
      <div class="flex-none py-2 px-4 overflow-auto">
        <steps />
      </div>
      <div
        class="flex-1 min-w-0 overflow-auto px-2 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
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
import Steps from '@/components/Steps.vue';
/* import { firestore } from '../firebase'; */
import soundsTemp from '../soundsTemp.js';

export default {
  name: 'Home',
  data: () => ({
    sounds: [],
  }),
  components: {
    SoundBox,
    Steps,
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
