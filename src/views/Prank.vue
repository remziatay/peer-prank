<template>
  <div>
    <p class="absolute text-4xl  origin-center text-center mt-8">
      {{ peer.value ? 'YEP' : 'NOP' }}
    </p>
    <button
      class="absolute top-0 right-0 z-50 bg-pink-700 p-8 rounded"
      @click="jump = !jump"
    >
      JUMP
    </button>

    <scare-panel
      v-if="settings"
      v-bind="settings"
      :on="jump"
      @sound-ready="sendMessage({ soundReady: $event })"
      @picture-ready="sendMessage({ pictureReady: $event })"
      @started="sendMessage({ started: true })"
      @ended="sendMessage({ ended: true }) || (jump = false)"
    />
  </div>
</template>

<script>
import ScarePanel from '../components/ScarePanel.vue';

export default {
  components: { ScarePanel },
  props: ['unlocked'],
  data: () => {
    return {
      jump: false,
      conn: null,
      settings: null,
    };
  },
  methods: {
    sendMessage(message) {
      this.conn.send(message);
    },
  },
  inject: ['peer'],
  watch: {
    'peer.value'() {
      if (!this.peer.value) return;
      const peer = this.peer.value;
      this.conn = peer.connect(this.$route.params.id);
      this.conn.on('open', () => {
        this.conn.on('data', data => {
          console.log(data);
          if (data.fire) this.jump = true;
          else if (data.setup) this.settings = data.setup;
        });
      });
    },
    unlocked(val) {
      if (val) this.sendMessage({ unlocked: true });
    },
  },
};
</script>
