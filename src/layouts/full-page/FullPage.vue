<template>
  <div>
    <div v-if="loading.show">
      <!-- the-loading -->
      <the-loading></the-loading>
      <!-- /the-loading -->
    </div>
    <div v-else>
      <!-- the-header -->
      <the-header></the-header>
      <!-- /the-header -->
      <router-view></router-view>
      <!-- footer -->
      <the-footer></the-footer>
      <!-- /the-footer -->
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TheHeader from '@/components/header/TheHeader'
import TheFooter from '@/components/footer/TheFooter'
import TheLoading from '@/components/loading/TheLoading'

export default {
  name: 'full-page',
  components: {
    TheHeader,
    TheFooter,
    TheLoading
  },
  computed: {
    ...mapGetters({
      getLoading: 'getLoading'
    }),
    loading () {
      return this.getLoading
    }
  }
}
</script>
