<template>
  <div>
    <b-carousel
      v-model="slide"
      :interval="4000"
      :controls="controls"
      :indicators="indicators"
      :img-width="imgWidth"
      :img-height="imgHeight"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <!-- carousel-slide-item -->
      <CarouselSlideItem v-for="s of slider" :key="s.id" :slider="s" />
      <!-- / carousel-slide-item -->
    </b-carousel>
  </div>
</template>

<script>
import CarouselSlideItem from '@/components/carousel/components/CarouselSlideItem'
import { slider } from '@/components/carousel/slider'

export default {
  name: 'TheCarousel',
  components: {
    CarouselSlideItem
  },
  props: {
    imgWidth: {
      type: [String, Number],
      default: () => '800'
    },
    imgHeight: {
      type: [String, Number],
      default: () => '240'
    },
    controls: {
      type: Boolean,
      default: () => true
    },
    indicators: {
      type: Boolean,
      default: () => true
    }
  },
  data () {
    return {
      slide: 0,
      sliding: null,
      slider
    }
  },
  methods: {
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
    }
  }
}
</script>
