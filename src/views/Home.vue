<template>
  <div class="home">
    <div class="flex flex-wrap justify-center gap-4 p-4">
      <sound-box
        v-for="sound in sounds"
        :key="sound.url"
        :sound="sound"
      ></sound-box>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
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
    /* storage
      .ref('/sounds')
      .listAll()
      .then(files =>
        Promise.all(files.items.map(item => item.getDownloadURL()))
      )
      .then(fileLinks =>
        Promise.all(
          fileLinks.map(link =>
            soundsCollection.add({ title: 'blabla', url: link, prankCount: 0 })
          )
        )
      )
      .then(console.log('DONE')); */
  },
};
</script>
