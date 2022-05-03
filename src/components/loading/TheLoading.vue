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
  name: 'TheLoading',
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
