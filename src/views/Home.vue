<template>
  <div class="home">
    <div
      id="grid"
      class="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <sound-box
        v-for="sound in sounds"
        :key="sound.url"
        :sound="sound"
      ></sound-box>
    </div>
  </div>
</template>

<script>
import SoundBox from '@/components/SoundBox.vue';
import { firestore } from '../firebase';

export default {
  name: 'Home',
  data: () => ({
    sounds: [],
  }),
  components: {
    SoundBox,
  },
  mounted() {
    firestore
      .collection('/sounds')
      .get()
      .then(res => res.docs.map(doc => doc.data()))
      .then(sounds => (this.sounds = sounds.sort((a, b) => a.title > b.title)));
  },
};
</script>

<style scoped></style>
