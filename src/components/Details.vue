<template>
  <div class="bg-gray-100 bg-opacity-70 h-full">
    <slot />
    <div class="flex justify-center gap-4 flex-wrap px-5 lg:px-3 py-4">
      <div class="grid gap-4">
        <toggle v-model="detailsInput.tryFullscreen"
          >Try going fullscreen</toggle
        >
        <toggle v-model="detailsInput.leaveGuard"
          >Ask confirmation when trying to leave
        </toggle>
        <div
          class="grid grid-rows-2 grid-flow-col justify-items-end content-end w-max gap-2"
        >
          <range v-model="detailsInput.volumeLevel">Volume Level</range>
          <range v-model="detailsInput.timeLimit" :max="10" :step="1"
            >Time Limit
          </range>
          <p>{{ detailsInput.volumeLevel * 100 + '%' }}</p>
          <p>
            {{
              detailsInput.timeLimit
                ? detailsInput.timeLimit + 'sec'
                : 'No limit'
            }}
          </p>
        </div>
      </div>
      <button
        @click="$emit('demo')"
        class="demo-button text-3xl font-mono font-semibold tracking-wide text-purple-50 bg-purple-700 flex-auto rounded-lg shadow transition-colors duration-500 focus:outline-none focus:ring-2 ring-purple-400 hover:bg-red-800"
      >
        TRY IT <span role="img">😈</span>
      </button>
    </div>
  </div>
</template>

<script>
import Range from './Range.vue';
import Toggle from './Toggle.vue';
export default {
  components: { Toggle, Range },
  props: ['details'],
  emits: ['update:details', 'demo'],
  data() {
    return { detailsInput: { ...this.details } };
  },
  watch: {
    detailsInput: {
      handler(newVal) {
        this.$emit('update:details', newVal);
      },
      deep: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.demo-button {
  min-width: 250px;
  max-width: 20rem;
  min-height: 8rem;
}
</style>
