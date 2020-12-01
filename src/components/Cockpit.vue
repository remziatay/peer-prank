<template>
  <div>
    <button
      v-for="conn in connections.value"
      :key="conn.id"
      @click="fire(conn.connection)"
    >
      FIRE
    </button>
  </div>
</template>

<script>
export default {
  inject: ['peerId', 'connections'],
  methods: {
    fire(conn) {
      conn.send({ fire: true });
    },
  },
};
</script>

<style></style>
