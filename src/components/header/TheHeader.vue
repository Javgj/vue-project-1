<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="dark">
    <b-navbar-brand to="/home">
      <v-logo width="100" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <!-- menu -->
        <b-navbar-nav>
          <header-nav-item v-for="menu of navMenu" :key="menu.id" :menu="menu"></header-nav-item>
        </b-navbar-nav>
        <!-- menu -->

        <!-- i18n -->
        <header-i18n></header-i18n>
        <!-- i18n -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import HeaderI18n from '@/components/header/components/HeaderI18n'
import HeaderNavItem from '../header/components/HeaderNavItem'
import { navMenu } from '@/components/header/nav-menu'

export default {
  name: 'the-header',
  props: {
  },
  components: {
    HeaderI18n,
    HeaderNavItem
  },
  data () {
    return {
      navMenu
    }
  }
}
</script>
