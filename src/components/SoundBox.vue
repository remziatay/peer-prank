<template>
  <div class="shadow mb-3">
    <h1>{{ sound.title }}</h1>
    <p>Used in {{ sound.prankCount }} pranks.</p>
    <audio :src="sound.url" controls loop>
      Your browser doesn't support audio!
    </audio>
  </div>
</template>

<script>
export default {
  props: ['sound'],
};
</script>

<style></style>
