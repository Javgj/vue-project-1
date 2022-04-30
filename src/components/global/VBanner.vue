<template>
  <div class="banner">
    <img
      :src="src"
      :alt="alt">
    <div class="text">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-banner',
  props: {
    title: {
      type: String,
      default: () => 'Default',
      required: true
    },
    src: {
      type: String,
      default: () => 'Default',
      required: true
    },
    alt: {
      type: String,
      default: () => 'Default',
      required: true
    }
  }
}
</script>

<style scoped>
.banner {
  position: relative;
  display: inline-block; /* Make the width of box same as image */
  text-align: center;
  width: 100%;
}
.banner .text{
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 20%; /* Adjust this value to move the positioned div up and down */
  text-align: center;
  color: #000;
}

img {
  width: 100%;
  height: 80px;
  object-fit: cover;
}
</style>
