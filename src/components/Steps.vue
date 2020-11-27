<template>
  <div class="flex flex-col">
    <button
      v-for="(step, i) in steps"
      class="step relative flex items-center py-6 select-none focus:outline-none"
      :class="stepClass(i)"
      :key="step.title"
      :disabled="lastStep < i"
      @click="$emit('update:atStep', i)"
    >
      <div class="ball"></div>
      <div class="ml-6 flex flex-col items-start">
        <div class="uppercase font-semibold text-xs sm:text-sm">
          {{ step.title }}
        </div>
        <div class="text-xs text-gray-700 hidden sm:block">
          {{ step.description }}
        </div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: ['steps', 'atStep', 'lastStep'],
  emits: ['update:atStep'],
  methods: {
    stepClass(i) {
      return {
        at: i === this.atStep,
        active: i === this.lastStep,
        done: i < this.lastStep,
        next: i > this.lastStep,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
.step {
  margin-left: 8px;

  &:not(:first-of-type)::before {
    content: '';
    @apply h-1/2 absolute top-0 border-l-2 border-purple-800;
  }

  &:not(:last-of-type)::after {
    content: '';
    @apply h-1/2 absolute bottom-0 border-l-2 border-purple-800;
  }

  > .ball {
    @apply absolute bg-purple-800 rounded-full z-10 flex justify-center items-center;
    --size: 30px;
    width: var(--size);
    height: var(--size);
    /* +1px is because of 2px border 2px/2=1px */
    left: calc(var(--size) / -2 + 1px);
  }

  &.active {
    &::after {
      @apply border-gray-400;
    }
    > .ball {
      @apply bg-white border-2 border-purple-800;
    }
  }

  &:hover:not(.next),
  &.at {
    > .ball {
      @apply bg-white border-2 border-purple-800;

      &::before {
        content: '';
        @apply bg-purple-800 rounded-full w-1/4 h-1/4;
      }
    }
  }

  &.next {
    &::before,
    &::after {
      @apply border-gray-400;
    }

    > .ball {
      @apply bg-white border-2 border-gray-400;
    }
  }

  &.done:not(:hover):not(.at) > .ball::before {
    content: '✓';
    @apply text-white font-bold;
  }
}
</style>
