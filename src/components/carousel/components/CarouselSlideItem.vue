<template>
  <div>
    <b-carousel-slide
      :caption="slider.caption"
      :text="slider.text"
      :img-src="slider.src">
      <slot name="subtitle" />
    </b-carousel-slide>
  </div>
</template>

<script>
export default {
  name: 'CarouselSlideItem',
  props: {
    slider: {
      type: Object
    }
  }
}
</script>
