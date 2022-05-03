<template>
  <div>
    <div v-if="loading.show">
      <!-- the-loading -->
      <TheLoading></TheLoading>
      <!-- /the-loading -->
    </div>
    <div v-else>
      <!-- the-header -->
      <TheHeader></TheHeader>
      <!-- /the-header -->
      <router-view></router-view>
      <!-- footer -->
      <TheFooter></TheFooter>
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
  name: 'FullPage',
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
