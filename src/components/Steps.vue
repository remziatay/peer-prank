<template>
  <div class="flex justify-center sm:flex-col">
    <button
      v-for="(step, i) in steps"
      class="step"
      :class="stepClass(i)"
      :key="step.title"
      :disabled="lastStep < i"
      @click="$emit('update:atStep', i)"
    >
      <div class="ball"></div>
      <div class="mt-5 sm:m-0 sm:ml-6 flex flex-col items-start">
        <div class="uppercase font-semibold text-xs sm:text-sm">
          {{ step.title }}
        </div>
        <div class="text-xs text-gray-700 hidden md:block">
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
  @apply relative flex items-center select-none focus:outline-none;

  &:first-child {
    padding-left: 0;
    padding-top: 0;
  }

  &:last-child {
    padding-right: 0;
    padding-bottom: 0;
  }

  @media screen and (min-width: 640px) {
    margin-left: 8px;
    padding: 1.5rem 0;

    &:not(:first-of-type)::before {
      content: '';
      @apply h-1/2 absolute top-0 border-l-2 border-purple-800;
    }

    &:not(:last-of-type)::after {
      content: '';
      @apply h-1/2 absolute bottom-0 border-l-2 border-purple-800;
    }
  }

  @media screen and (max-width: 639px) {
    margin-top: 8px;
    padding: 0 1.2rem;
    flex-direction: column;

    &:not(:first-of-type)::before {
      content: '';
      @apply w-1/2 absolute left-0 border-t-2 border-purple-800;
    }

    &:not(:last-of-type)::after {
      content: '';
      @apply w-1/2 absolute right-0 border-t-2 border-purple-800;
    }
  }

  > .ball {
    @apply absolute bg-purple-800 rounded-full z-10 flex justify-center items-center;
    --size: 30px;
    width: var(--size);
    height: var(--size);
    /* +1px is because of 2px border 2px/2=1px */
    @media screen and (min-width: 640px) {
      left: calc(var(--size) / -2 + 1px);
    }
    @media screen and (max-width: 639px) {
      top: calc(var(--size) / -2 + 1px);
    }
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
