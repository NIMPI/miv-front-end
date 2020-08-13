<template>
  <nav class="navbar-nav navbar-expand-lg bg-light">
    <div style="z-index: 1; width: 100px; height: 100px;background-color: #117A25;">
      <img src="../../assets/logo.png" alt="Logo" class="mt-4 logo_navbar" />
    </div>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <div class="nav align-items-center">
          <i class="ml-5 mr-2 material-icons icon_color_primary">search</i>
          <div class="input_container">
            <input type="text" class="awsome_input" placeholder="Pesquisar..." />
          </div>
        </div>
      </ul>
      <div>
        <p class="mr-3 d-inline-flex text-center">{{ user.name }}</p>
        <img class="avatar_navbar" src="../../assets/images/avatar.png" alt="Avatar" />
        <button class="btn">
          <i class="material-icons icon_color_primary">keyboard_arrow_down</i>
        </button>
      </div>
      <div class="spacer"></div>
      <button class="btn">
        <i class="material-icons icon_color_primary">notifications</i>
      </button>
      <button class="btn" v-on:click="deletar()">
        <i class="material-icons icon_color_primary mr-2">exit_to_app</i>
      </button>
    </div>
    <div class="sidenav align-items-center">
      <router-link :to="{ name: 'Home' }">
        <button class="btn icon_sidebar">
          <span class="material-icons">dashboard</span>
        </button>
      </router-link>
      <router-link :to="{ name: '' }">
        <button class="btn icon_sidebar">
          <i class="material-icons ">folder</i>
        </button>
      </router-link>
      <router-link :to="{ name: 'metadados' }">
      <button class="btn icon_sidebar">
        <i class="material-icons icon_bar">description</i>
      </button>
      </router-link>
      <div class="d-flex justify-content-end flex-column align-items-center" style="height: 650px;">
        <div class="spacer-h"></div>
        <router-link :to="{ name: 'config' }">
        <button class="btn mt-3 icon_sidebar">
          <i class="material-icons icon_bar">settings</i>
        </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['user']),
    routes () {
      return this.$router.options.routes.filter(
        route => route.meta && route.meta.showNavbar
      )
    },
    deletar () {
      localStorage.removeItem('token')
      return location.reload()
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
</style>
