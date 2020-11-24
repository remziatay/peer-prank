<template>
  <p class="absolute text-9xl  origin-center text-center mt-8">
    PRANKED
  </p>
  <button class="absolute top-0 right-0" @click="scare">JUMP</button>

  <img
    v-show="jump"
    class="max-h-screen mx-auto"
    src="https://via.placeholder.com/1300.png"
    alt="jumpscare"
  />
</template>

<script>
export default {
  beforeMount() {
    this.sound = new Audio(
      'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3'
    );
  },
  mounted() {
    setTimeout(this.scare, 2000);
  },
  data() {
    return {
      jump: false,
    };
  },
  methods: {
    scare() {
      this.jump = !this.jump;
      if (this.jump) this.sound.play();
      else this.sound.pause();
    },
  },
};
</script>

<style scoped>
img {
  animation: jumpscare 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) alternate
    infinite forwards;
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
