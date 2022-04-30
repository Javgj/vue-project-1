<template>
  <b-nav-item-dropdown text="Lang" right>
    <b-dropdown-item v-for="(lang, index) of languages" :key="index" @click="changeLanguage(lang.locale)">
      {{ lang.locale }} <img :src="lang.src" width="20" class="m-auto align-middle float-right">
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
import { loadeLanguageAsync } from '@/plugins/i18n'
export default {
  name: 'HeaderI18n',
  data () {
    return {
      languages: [
        {
          id: 1,
          locale: 'en',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png'
        },
        {
          id: 2,
          locale: 'es',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png'
        }
      ]
    }
  },
  methods: {
    changeLanguage (lang) {
      loadeLanguageAsync(lang)
    }
  }
}
</script>
