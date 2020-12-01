<template>
  <div class="bg-gray-100 bg-opacity-70 h-full px-4 py-2">
    <div class="flex flex-wrap justify-center gap-4">
      <victim
        v-for="conn in connections.value"
        :key="conn.id"
        :id="conn.id"
        :ready="ready(conn)"
        @fire="conn.fire()"
      />
    </div>
  </div>
</template>

<script>
import Victim from './Victim.vue';
export default {
  components: { Victim },
  inject: ['peerId', 'connections'],
  methods: {
    ready(conn) {
      return {
        picture: conn.pictureReady,
        sound: conn.soundReady,
        unlocked: conn.unlocked,
      };
    },
  },
};
</script>

<style></style>
