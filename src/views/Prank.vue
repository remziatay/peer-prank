<template>
  <p class="absolute text-9xl  origin-center text-center mt-8">
    PRANKED
  </p>
  <button
    class="absolute top-0 right-0 z-10 bg-pink-700 p-8 rounded"
    @click="scare"
  >
    JUMP
  </button>

  <!-- <div class="w-screen h-screen flex justify-center items-center"> -->
  <div
    ref="scarePanel"
    id="jumpscare"
    v-show="jump"
    class="fixed h-screen w-screen mx-auto"
    :style="{
      backgroundImage: `url(${cache?.src || ''})`,
    }"
  ></div>
  <!-- </div> -->
</template>

<script>
import { Howl } from 'howler';
export default {
  mounted() {
    this.player = new Howl({
      src: [
        'https://firebasestorage.googleapis.com/v0/b/peer-prank.appspot.com/o/sounds%2Fscream03.mp3?alt=media&token=5c1f9bc1-815d-4a21-8057-0cff2d4c39ea',
      ],
      sprite: {
        scare: [0, 1500],
      },
      preload: true,
      loop: true,
      volume: 1,
      onload: () => console.log('sound is loaded'),
      onloaderror: () => console.log('sound could not load'),
    });
    this.cache = new Image();
    this.cache.src =
      'https://images.flickreel.com/wp-content/uploads/2016/06/the_exorcist_horror_picture_witch_ultra_3840x2160_hd-wallpaper-402531.jpg';
    this.cache.onload = () => console.log('image loaded');
    //setTimeout(this.scare, 2000);
  },
  data() {
    return {
      jump: false,
      player: null,
      cache: null,
    };
  },
  methods: {
    scare() {
      if (!this.jump) {
        document.body.requestFullscreen().finally(() => {
          this.jump = !this.jump;
          this.player.play('scare');
        });
      } else {
        this.jump = !this.jump;
        this.player.stop();
        document.exitFullscreen();
      }
    },
  },
};
</script>

<style scoped>
#jumpscare {
  animation: jumpscare 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) alternate
    infinite forwards;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@keyframes jumpscare {
  from {
    transform: scale(0);
  }
  5% {
    transform: scale(1);
  }
  10% {
    transform: scale(60%);
  }
  15% {
    transform: scale(1);
  }
  25% {
    transform: translateX(-12px);
  }
  35% {
    transform: translateX(13px);
  }
  45% {
    transform: translateX(-20px);
  }
  55% {
    transform: translateX(20px);
  }
  65% {
    transform: translateX(-12px);
  }
  75% {
    transform: translateX(13px);
  }
  85% {
    transform: translateX(-20px);
  }
  95% {
    transform: translateX(13px);
  }
  to {
    transform: scale(1);
  }
}
</style>
