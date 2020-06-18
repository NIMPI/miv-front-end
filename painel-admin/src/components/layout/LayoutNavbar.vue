<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="{ name: 'home' }">
      <div style="width: 100px; height: 100px;background-color: #117A25; padding: 2%;">
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
        <i class="material-icons icon_color_primary">exit_to_app</i>
      </button>
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