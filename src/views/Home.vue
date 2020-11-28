<template>
  <div class="home">
    <div
      class="flex flex-col sm:flex-row w-full mx-auto max-w-screen-2xl px-1 md:px-6 py-2 gap-2 max-h-full"
    >
      <div
        class="flex-none py-2 px-4 overflow-auto bg-gray-100 bg-opacity-50 rounded-md shadow"
      >
        <steps :steps="steps" v-model:atStep="atStep" :lastStep="lastStep" />
      </div>

      <pick-panel
        @next="lastStep > atStep && atStep++"
        :isLast="atStep === lastStep"
      >
        <template #title>
          <p v-if="atStep === 0">Pick a Picture!</p>
          <div v-else-if="atStep === 1">
            <p>Pick a Sound!</p>
            <p class="text-sm">(Hover or click to listen)</p>
          </div>
        </template>
        <template #default>
          <pictures
            v-if="atStep === 0"
            :pictures="pictures"
            v-model:picture="selectedPicture"
          />
          <keep-alive>
            <sounds
              v-if="atStep === 1"
              :sounds="sounds"
              v-model:sound="selectedSound"
            />
          </keep-alive>
          <div
            v-if="atStep === 2"
            v-text="'TESSSStsadsadasdsa'"
            @click="lastStep = 3"
          />
        </template>
      </pick-panel>
    </div>
  </div>
</template>

<script>
import Sounds from '@/components/Sounds.vue';
import Steps from '@/components/Steps.vue';
import Pictures from '@/components/Pictures.vue';
import PickPanel from '@/components/PickPanel.vue';
/* import { firestore, storage } from '../firebase'; */
import soundsTemp from '../soundsTemp.js';
import picturesTemp from '../picturesTemp.js';

export default {
  name: 'Home',
  components: {
    Sounds,
    Steps,
    Pictures,
    PickPanel,
  },
  data: () => ({
    sounds: [],
    pictures: [],
    steps: [
      {
        title: 'Picture',
        description: 'Choose what shall jump on your friends',
      },
      {
        title: 'Sound',
        description: 'Choose the sound that will play on jumpscare',
      },
      { title: 'title3', description: 'description3' },
      { title: 'title4', description: 'description4' },
      { title: 'title5', description: 'description5' },
    ],
    atStep: 0,
    selectedPicture: null,
    selectedSound: null,
  }),
  computed: {
    lastStep() {
      if (!this.selectedPicture) return 0;
      if (!this.selectedSound) return 1;
      return 2;
    },
  },
  mounted() {
    // Keep sounds local for now development
    this.sounds = soundsTemp;
    this.pictures = picturesTemp;
    /* const compare = (a, b) => a.title.localeCompare(b.title);
    firestore
      .collection('/sounds')
      .get()
      .then(res => res.docs.map(doc => doc.data()))
      .then(sounds => (this.sounds = sounds.sort(compare)));
    firestore
      .collection('/pictures')
      .get()
      .then(res => res.docs.map(doc => doc.data()))
      .then(pics => (this.pictures = pics.sort(compare))); */
  },
};
</script>

<style scoped></style>
