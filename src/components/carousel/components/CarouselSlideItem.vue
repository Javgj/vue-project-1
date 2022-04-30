<template>
  <div>
    <b-carousel-slide
      :caption="slider.caption"
      :text="slider.text"
      :img-src="slider.src">
    </b-carousel-slide>
  </div>
</template>

<script>
export default {
  name: 'carousel-slide-item',
  props: {
    slider: {
      type: Object
    }
  }
}
</script>
