<template>
  <div class="h-screen flex flex-col">
    <navbar v-if="!pranking"></navbar>
    <router-view v-slot="{ Component }">
      <keep-alive include="Home" max="1">
        <component
          class="flex-1 min-h-0 overflow-auto"
          :is="Component"
          :key="$route.fullPath"
        ></component>
      </keep-alive>
    </router-view>
  </div>
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
