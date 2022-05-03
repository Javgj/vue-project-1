<template>
  <div>
    <b-nav-item
      :to="menu.route">
      {{ menu.title }}
    </b-nav-item>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenuItem',
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>
