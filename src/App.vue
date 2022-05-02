<template>
  <div id="app">
    <component :is="getTemplate">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    getTemplate () {
      return this.$route.meta.template
    }
  }
}
</script>
