<template>
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
    :on="jump"
    @ended="jump = false"
    picture="https://images.flickreel.com/wp-content/uploads/2016/06/the_exorcist_horror_picture_witch_ultra_3840x2160_hd-wallpaper-402531.jpg"
    sound="https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream03.mp3?alt=media&token=5c1f9bc1-815d-4a21-8057-0cff2d4c39ea"
    :leaveGuard="true"
  />
</template>

<script>
import ScarePanel from '../components/ScarePanel.vue';

export default {
  components: { ScarePanel },
  data: () => {
    return {
      jump: false,
      conn: null,
    };
  },
  inject: ['peer', 'connections'],
  watch: {
    'peer.value'() {
      if (!this.peer.value) return;
      const peer = this.peer.value;
      this.conn = peer.connect(this.$route.params.id);
      this.conn.on('open', () => {
        console.log('opened');
        this.conn.on('data', data => {
          console.log('data', data);
          if (data.fire) this.jump = true;
        });
      });
    },
  },
};
</script>
