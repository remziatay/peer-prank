<template>
  <div v-if="!pranking" id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      pranking: true,
    };
  },
  watch: {
    $route: function() {
      this.pranking = this.$route.name === 'Prank';
    },
  },
};
</script>

<style></style>
