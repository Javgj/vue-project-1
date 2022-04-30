<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="800"
      img-height="240"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <!-- carousel-slide-item -->
      <carousel-slide-item v-for="s of slider" :key="s.id" :slider="s" />
      <!-- / carousel-slide-item -->
    </b-carousel>
  </div>
</template>

<script>
import CarouselSlideItem from '@/components/carousel/components/CarouselSlideItem'
import { slider } from '@/components/carousel/slider'
export default {
  name: 'the-carousel',
  components: {
    CarouselSlideItem
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      slider
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
