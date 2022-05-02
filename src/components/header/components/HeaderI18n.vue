<template>
  <b-nav-item-dropdown text="Lang" right>
    <b-dropdown-item
      v-for="(lang, index) of languages"
      :key="index"
      @click="changeLanguage(lang.locale)">
      {{ lang.locale }} <img :src="lang.src" width="20" class="m-auto align-middle float-right">
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
import { loadedLanguageAsync } from '@/plugins/i18n'
import { languages } from '@/components/header/languages'
export default {
  name: 'HeaderI18n',
  data () {
    return {
      languages
    }
  },
  methods: {
    changeLanguage (lang) {
      loadedLanguageAsync(lang)
    }
  }
}
</script>
