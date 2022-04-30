<template>
  <div>
    <b-container class="my-4 text-center">
      <the-carousel></the-carousel>

      <h1>{{ $t('home.welcome') }}</h1>
      <b-row>
        <b-col :lg="6" :xl="6" class="p-5 m-2 border">
          {{ $t('home.example_txt_1') }}
        </b-col>
        <b-col class="p-5 m-2 border">
          {{ $t('home.example_txt_2') }}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import TheCarousel from '@/components/carousel/TheCarousel'
export default {
  name: 'home-view',
  components: {
    TheCarousel
  }
}
</script>
