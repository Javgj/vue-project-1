<template>
  <div>
    <!-- v-banner -->
    <v-banner
      :title="$t('about_us.title')"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-morty-season-5-finale-1631266872.jpg?crop=1.00xw:0.898xh;0,0&resize=1200:*"
      alt="img-1" />
    <!-- / v-banner -->

    <b-container class="my-5 p-5">
      <h3>{{ $t('about_us.questions.qn_1.title') }}</h3>
      <p>
        {{ $t('about_us.questions.qn_1.text') }}
      </p>

      <h3>{{ $t('about_us.questions.qn_2.title') }}</h3>
      <p>
        {{ $t('about_us.questions.qn_2.text') }}
        <a href="#" target="_blank">
          {{ $t('about_us.questions.qn_2.link') }}
        </a>
      </p>

      <h3>{{ $t('about_us.questions.qn_3.title') }}</h3>
      <p>
        {{ $t('about_us.questions.qn_3.text') }}
      </p>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'about-us'
}
</script>
