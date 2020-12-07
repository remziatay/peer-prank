<template>
  <i class="gg-spinner-alt text-center text-purple-900 mt-6 mx-auto" />
</template>

<style scoped>
@keyframes spinneralt {
  0% {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.gg-spinner-alt {
  transform: scale(2.5);
}
.gg-spinner-alt,
.gg-spinner-alt::before {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
}
.gg-spinner-alt::before {
  content: '';
  position: absolute;
  border-radius: 100px;
  animation: spinneralt 1s cubic-bezier(0.6, 0, 0.4, 1) infinite;
  border: 3px solid transparent;
  border-top-color: currentColor;
}
</style>
