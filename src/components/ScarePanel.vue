<template>
  <div
    class="fixed left-0 top-0 h-screen w-screen"
    :style="{ zIndex: 9999999999 }"
    v-show="jump"
  >
    <div
      ref="panel"
      id="jumpscare"
      class="z-40 w-full h-full"
      :style="{
        backgroundImage: `url(${cache?.src || ''})`,
      }"
    />
    <button
      class="absolute right-2 top-2 w-32 h-20 rounded-lg shadow-sm text-lg font-semibold bg-red-500 z-50 pointer-events-auto"
      v-if="jump && stoppable"
      @click="scareOff"
    >
      STOP
    </button>
  </div>
</template>

<script>
import { Howl } from 'howler';
export default {
  props: {
    picture: { type: String, required: true },
    sound: { type: String, required: true },
    tryFullscreen: { type: Boolean, default: false },
    leaveGuard: { type: Boolean, default: false },
    volumeLevel: { type: Number, default: 0.5 },
    timeLimit: { type: Number, default: 8 },
    on: { type: Boolean, default: false },
    stoppable: { type: Boolean, default: false },
  },
  emits: ['sound-ready', 'picture-ready', 'all-ready', 'started', 'ended'],
  data() {
    return {
      jump: this.on,
      player: null,
      cache: null,
      readyCount: 0,
    };
  },
  mounted() {
    this.player = new Howl({
      src: [this.sound],
      preload: true,
      loop: true,
      volume: this.volumeLevel,
      onload: () => {
        this.readyCount++;
        this.$emit('sound-ready', true);
      },
      onloaderror: () => {
        this.readyCount++;
        this.$emit('sound-ready', false);
      },
    });
    this.cache = new Image();
    this.cache.src = this.picture;
    this.cache.onload = () => {
      this.readyCount++;
      this.$emit('picture-ready', true);
    };
  },
  methods: {
    scareOn() {
      if (this.leaveGuard) {
        window.onbeforeunload = window.confirm;
      }
      this.$refs.panel.focus();
      this.jump = true;
      this.player.play();
      if (this.timeLimit) {
        setTimeout(this.scareOff, this.timeLimit * 1000);
      }
      this.$emit('started');
    },
    scareOff() {
      if (this.leaveGuard) {
        window.onbeforeunload = null;
      }
      this.player.stop();
      this.jump = false;
      this.$emit('ended');
    },
  },
  watch: {
    readyCount() {
      if (this.readyCount === 2) this.$emit('all-ready', true);
    },
    on(val) {
      if (val) {
        if (this.tryFullscreen)
          document.body.requestFullscreen().finally(this.scareOn);
        else this.scareOn();
      } else {
        this.scareOff();
        if (this.tryFullscreen) document.exitFullscreen();
      }
    },
    volumeLevel(val) {
      this.player.volume(val);
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
