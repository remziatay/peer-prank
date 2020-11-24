<template>
  <div v-if="!pranking" id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import { Howl } from 'howler';
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
  mounted() {
    new Howl({ src: ['a.mp3'], preload: false }).once('unlock', function() {
      console.log('Sound unlocked');
    });
  },
};
</script>

<style></style>
