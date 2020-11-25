<template>
  <navbar v-if="!pranking"></navbar>
  <router-view v-slot="{ Component }">
    <keep-alive include="Home" max="1">
      <component :is="Component" :key="$route.fullPath"></component>
    </keep-alive>
  </router-view>
</template>

<script>
import { Howl } from 'howler';
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    Navbar,
  },
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
