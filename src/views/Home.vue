<template>
  <div class="home">
    <div
      class="flex w-full mx-auto max-w-screen-2xl md:px-6 py-2 gap-2 max-h-full"
    >
      <div
        class="flex-none py-2 px-4 overflow-auto bg-gray-100 rounded-md shadow"
      >
        <steps :steps="steps" v-model:atStep="atStep" :lastStep="lastStep" />
      </div>

      <pick-panel @next="lastStep > atStep && atStep++">
        <template #title>
          <p v-if="atStep === 0">Pick a Picture!</p>
          <p v-else-if="atStep === 1">
            Pick a Sound! <span>(Hover over to listen)</span>
          </p>
        </template>
        <template #default>
          <pictures
            v-if="atStep === 0"
            :pictures="pictures"
            v-model:picture="selectedPicture"
          />
          <sounds
            v-else-if="atStep === 1"
            :sounds="sounds"
            v-model:sound="selectedSound"
          />
          <div
            v-else-if="atStep === 2"
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
/* import { firestore } from '../firebase'; */
import soundsTemp from '../soundsTemp.js';

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
    /* firestore
      .collection('/sounds')
      .get()
      .then(res => res.docs.map(doc => doc.data()))
      .then(sounds => (this.sounds = sounds.sort((a, b) => a.title > b.title))); */
  },
};
</script>

<style scoped></style>
