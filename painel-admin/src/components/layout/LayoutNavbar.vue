<template>
  <nav class="navbar-nav navbar-expand-lg bg-light">
    <router-link :to="{ name: 'home' }">
      <div style="width: 100px; height: 100px;background-color: #117A25;">
        <img src="../../assets/logo.png" alt="Logo" class="logo_navbar" />
      </div>
    </router-link>

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
      <button class="btn">
        <i class="material-icons icon_color_primary mr-2">exit_to_app</i>
      </button>
    </div>
    <div class="sidenav align-items-center">
      <button class="btn mb-3 icon_sidebar">
        <span class="material-icons ">dashboard</span>
      </button>
      <button class="btn mb-3">
        <i class="material-icons icon_sidebar">folder</i>
      </button>
      <button class="btn mb-3">
        <i class="material-icons icon_sidebar">description</i>
      </button>
      <div class="d-flex justify-content-end flex-column" style="height: 650px;">
        <div class="spacer-h"></div>
        <button class="btn mt-2">
          <i class="material-icons icon_sidebar">settings</i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["user"]),
    routes() {
      return this.$router.options.routes.filter(
        route => route.meta && route.meta.showNavbar
      );
    }
  }
};
</script>

<style scoped>
.btn-exit {
  display: flex;
  top: 40px;
  right: 40px;
}
</style>