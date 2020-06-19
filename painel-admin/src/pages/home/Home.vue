<template>
  <div id="home">
    <div class="user-info">
      <h2>Olá, {{ user.name }} ;)</h2>
      <p>Bem vindo ao Séries Wished</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState('auth', ['user']),
    routes () {
      return this.$router.options.routes.filter(route => (
        route.meta && route.meta.showNavbar
      ))
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin flex-center($columns: false) {
  display: flex;
  align-items: center;
  justify-content: center;

  @if $columns {
    flex-direction: column;
  }
}

#home {
  width: 100%;
  height: 100vh;
  @include flex-center(true);
  justify-content: space-around;

  .user-info {
    text-align: center;
  }

}
</style>
