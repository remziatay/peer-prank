<template>
  <div class="bg-gray-100 bg-opacity-70 h-full px-4 py-2">
    <div class="flex flex-wrap justify-center gap-4">
      <victim v-for="conn in connections.value" :conn="conn" :key="conn.id" />
    </div>
  </div>
</template>

<script>
import Victim from './Victim.vue';
export default {
  components: { Victim },
  inject: ['peerId', 'connections'],
};
</script>

<style></style>
