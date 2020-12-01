<template>
  <div
    class="flex border-gray-600 gap-8 border rounded py-2 px-4 justify-around items-center"
  >
    <p class="font-semibold text-gray-800 ">ID: {{ id }}</p>
    <div class="flex gap-2">
      <div class="ball relative" :class="ballClass(ready.picture)">
        <p class="absolute bottom-full left-1/4 text-xs font-bold">P</p>
      </div>
      <div class="ball relative" :class="ballClass(ready.sound)">
        <p class="absolute bottom-full left-1/4 text-xs font-bold">S</p>
      </div>
      <div class="ball relative" :class="ballClass(ready.unlocked)">
        <p class="absolute bottom-full left-1/4 text-xs font-bold">U</p>
      </div>
    </div>
    <button
      class="font-semibold tracking-wide text-purple-50 bg-red-700  hover:bg-red-800 px-3 py-2 rounded-md shadow transition-colors duration-200 focus:outline-none focus:ring-2 ring-red-400"
      @click="$emit('fire')"
    >
      FIRE
    </button>
  </div>
</template>

<script>
export default {
  props: ['id', 'ready', 'fire'],
  emits: ['fire'],
  methods: {
    ballClass(state) {
      return state ? 'ready' : state === false ? 'fail' : '';
    },
  },
};
</script>

<style lang="postcss" scoped>
.ball {
  @apply rounded-full w-4 h-4 bg-gray-500;

  &.ready {
    @apply bg-green-500;
  }

  &.fail {
    @apply bg-red-500;
  }
}
</style>
