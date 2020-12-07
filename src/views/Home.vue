<template>
  <div class="flex bg-gray-50 bg-opacity-50 py-24 justify-center">
    <div class="p-12 text-center max-w-2xl">
      <div class="md:text-3xl text-3xl font-bold">
        Want to scare your friends a little?
      </div>
      <div class="text-xl font-normal mt-4">
        PeerPrank will help you with a rich catalogue of scary media with that.
        Create your jumpscare prank in 30 seconds and troll your friends!
      </div>
      <div class="mt-6 flex justify-center h-12 relative">
        <button
          class="flex shadow-md font-medium absolute py-2 px-4 text-white bg-green-800 rounded text-lg tr-mt"
          @click="$router.replace('/create')"
        >
          Create now
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    import('./Create.vue');
  },
};
</script>
