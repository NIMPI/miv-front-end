<template>
  <div id="app">
    <layout-navbar v-if="showNavbar"/>
    <sidenav v-if="showNavbar"/>
    <router-view/>
  </div>
</template>

<script>
import LayoutNavbar from './components/layout/LayoutNavbar'
import Sidenav from './components/layout/Sidenav'

export default {
  components: {
    LayoutNavbar,
    Sidenav
  },
  computed: {
    showNavbar () {
      return this.$route.name !== 'login'
    }
  }
}
</script>

<style lang="scss">
</style>
