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
  name: 'header-menu-item',
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>
