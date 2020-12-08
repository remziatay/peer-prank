<template>
  <div
    class="flex flex-col sm:flex-row w-full mx-auto max-w-screen-2xl px-1 md:px-6 py-2 gap-2 max-h-full"
  >
    <div
      class="flex-none py-2 px-4 overflow-auto bg-gray-100 bg-opacity-50 rounded-md shadow"
    >
      <Steps :steps="steps" v-model:atStep="atStep" :lastStep="lastStep" />
    </div>

    <PickPanel
      @next="lastStep > atStep && atStep++"
      :isLast="atStep === lastStep"
    >
      <template #title>
        <p v-if="atStep === 0">Pick a Picture!</p>
        <div v-else-if="atStep === 1">
          <p>Pick a Sound!</p>
          <p class="text-sm">(Hover or click to listen)</p>
        </div>
        <p v-else-if="atStep === 2">Set some details!</p>
        <p v-else-if="atStep === 3">Pass the word to the victims!</p>
        <p v-else-if="atStep === 4">Time to scare!</p>
      </template>
      <template #default>
        <div class="overflow-auto px-5 pt-3 flex-1">
          <keep-alive>
            <Pictures v-if="atStep === 0" v-model:picture="selectedPicture" />
            <Sounds v-else-if="atStep === 1" v-model:sound="selectedSound" />
          </keep-alive>
          <Details
            v-model:details="selectedDetails"
            v-if="atStep === 2"
            @demo="demoOn = true"
          >
            <scare-panel
              :on="demoOn"
              :picture="selectedPicture"
              :sound="selectedSound"
              v-bind="{ ...selectedDetails }"
              @ended="demoOn = false"
              stoppable
            />
          </Details>
          <Share v-else-if="atStep === 3" />
          <Cockpit v-else-if="atStep === 4" />
        </div>
      </template>
    </PickPanel>
  </div>
</template>

<script>
import Sounds from '@/components/Sounds.vue';
import Steps from '@/components/Steps.vue';
import Pictures from '@/components/Pictures.vue';
import PickPanel from '@/components/PickPanel.vue';
import ScarePanel from '@/components/ScarePanel.vue';
import Share from '@/components/Share.vue';
import Details from '@/components/Details.vue';
import Cockpit from '@/components/Cockpit.vue';

export default {
  name: 'Create',
  components: {
    Sounds,
    Steps,
    Pictures,
    PickPanel,
    Details,
    ScarePanel,
    Share,
    Cockpit,
  },
  data: () => ({
    demoOn: false,
    steps: [
      {
        title: 'Picture',
        description: 'Choose what shall jump on your friends',
      },
      {
        title: 'Sound',
        description: 'Choose the sound that will play on jumpscare',
      },
      {
        title: 'Details',
        description: 'Some details for customer satisfaction',
      },
      { title: 'Share', description: 'Let the fun begin' },
      { title: 'Shoot!', description: 'Here is the cockpit' },
    ],
    atStep: 0,
    selectedPicture: null,
    selectedSound: null,
    selectedDetails: {
      tryFullscreen: false,
      volumeLevel: 0.5,
      leaveGuard: false,
      timeLimit: 8,
    },
  }),
  computed: {
    lastStep() {
      if (!this.selectedPicture) return 0;
      if (!this.selectedSound) return 1;
      if (!this.selectedDetails) return 2;
      return 4;
    },
  },
  inject: ['connections'],
  watch: {
    'connections.value'(connections) {
      for (const conn of connections) {
        conn.setup?.({
          picture: {
            id: this.selectedPicture.id,
            url: this.selectedPicture.url,
          },
          sound: {
            id: this.selectedSound.id,
            url: this.selectedSound.url,
          },
          ...this.selectedDetails,
        });
      }
    },
  },
};
</script>

<style scoped></style>
