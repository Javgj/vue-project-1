<template>
  <div class="text-center">
    <b-container class="loading">
      <b-spinner
        :variant="loading.variant"
        :type="loading.type">
      </b-spinner>
      <br>
      <h1>{{ loading.message }}...</h1>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'the-loading',
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

<style scoped>
.loading {
  position: absolute;
  left: calc(18% - 45px);
  top: 45%
}
</style>
