<template>
  <p @click="$emit('update:picture', 'somethin')">PICSSS</p>
</template>

<script>
export default {
  props: ['pictures', 'picture'],
  emits: ['update:picture'],
};
</script>

<style></style>
