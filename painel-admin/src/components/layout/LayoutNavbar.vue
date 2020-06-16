<template>
  <nav class="navbar navbar-light">
    <router-link :to="{ name: 'home' }">
      <div style="width: 100px; height: 100px;background-color: #117A25; padding: 2%;">
      <img src="../../assets/logo.png" alt="Logo" class="logo_navbar">
      </div>
    </router-link>
    <div>
      <h2 class="float-left">{{ user.name }}</h2>
      <img class="avatar_navbar" src="../../assets/images/avatar.png" alt="Avatar">
      <button class="btn btn-notificatios">
        <i class="material-icons">keyboard_arrow_down</i>
      </button>
    </div>
    <button class="btn btn-notificatios">
      <i class="material-icons">notifications</i>
    </button>
    <button class="btn btn-exit">
      <i class="material-icons">exit_to_app</i>
    </button>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
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

<style scoped>
  .btn-exit {
    display: flex;
    top: 40px;
    right: 40px;
  }
  .btn-notifications{
    display: flex;

  }
</style>