<template>
  <div class="flex flex-col">
    <div
      class="step relative flex items-center py-6"
      :class="{ active: i === active, done: i < active, next: i > active }"
      v-for="(step, i) in steps"
      :key="step.key"
    >
      <div class="ball"></div>
      <div class="ml-6 flex flex-col">
        <div class="uppercase font-semibold text-xs sm:text-sm">
          {{ step.title }}
        </div>
        <div class="text-xs text-gray-700 hidden sm:block">
          {{ step.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    /* steps */
  ],
  data: () => ({
    steps: [
      {
        title: 'Sound',
        description: 'Choose the sound that will play on jumpscare',
        key: 'Comp1',
      },
      {
        title: 'Picture',
        description: 'Choose what shall jump on your friends',
        key: 'Comp2',
      },
      { title: 'title3', description: 'description3', key: 'Comp3' },
      { title: 'title4', description: 'description4', key: 'Comp4' },
      { title: 'title5', description: 'description5', key: 'Comp5' },
    ],
    active: 2,
  }),
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

  &.done > .ball::before {
    content: '✓';
    @apply text-white font-bold;
  }
}
</style>
