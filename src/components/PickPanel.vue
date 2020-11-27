<template>
  <div class="w-full flex flex-col gap-2">
    <div
      class="flex px-2 items-baseline text-xl font-semibold bg-gray-100 rounded shadow-md p-1"
    >
      <p><slot name="title">Pick one!</slot></p>
      <button
        @click="$emit('next')"
        class="flex items-center ml-auto h-8 px-4 m-2 text-green-100 transition-colors duration-150 rounded-lg "
        :class="
          isLast
            ? 'bg-gray-700'
            : 'bg-green-700 focus:outline-none focus:ring-2 ring-offset-green-400 hover:bg-green-800'
        "
        :disabled="isLast"
      >
        <span class="text-sm font-semibold">Next</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: ['isLast'],
  emits: ['next'],
};
</script>

<style></style>
