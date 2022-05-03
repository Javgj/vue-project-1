<template>
  <div>
    <img
      :src="src"
      :width="width"
      :height="height"
      :alt="alt">
  </div>
</template>
<script>
export default {
  name: 'VLogo',
  props: {
    src: {
      type: String,
      default: 'https://logos-marcas.com/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png',
      required: false
    },
    width: {
      type: [String, Number],
      default: '100',
      required: true
    },
    height: {
      type: [String, Number],
      default: 'auto',
      required: false
    },
    alt: {
      type: String,
      default: 'logo',
      required: false
    }
  }
}
</script>
