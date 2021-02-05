<template>
  <div class="container-componente">
    <h1>Bem vindo, {{ user.name }} ;)</h1>
    <h6>Instituto Federal de Rondonia</h6>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState('auth', ['user']),
    routes () {
      return this.$router.options.routes.filter(
        (route) => route.meta && route.meta.showNavbar
      )
    }
  }
}
</script>
<style lang="scss">
*{
  font-family: 'Khula', sans-serif;
}
</style>
