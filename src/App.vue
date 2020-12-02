<template>
  <div class="h-screen flex flex-col">
    <navbar v-if="!pranking"></navbar>
    <router-view v-slot="{ Component }">
      <keep-alive include="Create" max="1">
        <component
          class="flex-1 min-h-0 overflow-auto"
          :is="Component"
          :key="$route.fullPath"
          :unlocked="unlocked"
        ></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { Howl } from 'howler';
import Navbar from '@/components/Navbar.vue';
import Peer from 'peerjs';
import { computed } from 'vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      pranking: true,
      connections: [],
      peerId: null,
      peer: null,
      unlocked: false,
    };
  },
  provide() {
    return {
      connections: computed(() => this.connections),
      peerId: computed(() => this.peerId),
      peer: computed(() => this.peer),
    };
  },
  watch: {
    $route: function() {
      this.pranking = this.$route.name === 'Prank';
    },
  },
  methods: {},
  mounted() {
    new Howl({ src: ['a.mp3'], preload: false }).once('unlock', () => {
      this.unlocked = true;
    });

    const peer = new Peer();

    peer.on('open', id => {
      this.peerId = id;
      this.peer = peer;
    });

    peer.on('connection', conn => {
      conn.on('open', () => {
        conn.on('data', message => {
          this.connections = this.connections.map(connection => {
            if (connection.id !== conn.peer) return connection;
            return { ...connection, ...message };
          });
        });
        conn.on('close', () => {
          this.connections = this.connections.filter(
            connection => connection.id !== conn.peer
          );
        });
        this.connections = [
          ...this.connections,
          {
            id: conn.peer,
            setup: data => {
              conn.send({ setup: data });
              this.connections = this.connections.map(connection => {
                if (connection.id !== conn.peer) return connection;
                return { ...connection, setup: null };
              });
            },
            fire() {
              conn.send({ fire: true });
            },
          },
        ];
      });
    });
  },
};
</script>

<style>
html {
  background-color: #e5e5f7;
  background-image: radial-gradient(#444df793 0.75px, transparent 0.75px),
    radial-gradient(#444df793 0.75px, #e5e5f7 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
}
button:focus-visible {
  outline: 1px dotted !important;
  outline: 5px auto -webkit-focus-ring-color !important;
}
</style>
