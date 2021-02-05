<template>
  <nav class="nav navbar-nav navbar-expand-lg bg-light">
    <div style="width: 5rem; height: 5rem;background-color: #117A25;">
      <img src="../../assets/logo.png" alt="Logo" class="mt-4 logo_navbar" />
    </div>
    <div class="collapse navbar-collapse">
      <ul class="mr-auto">
        <div class="nav align-items-center">
          <i class="material-icons icon_color_primary">search</i>
          <div class="input_container">
            <input type="text" class="awsome_input" placeholder="Pesquisar..." />
          </div>
        </div>
      </ul>
      <div>
        <p class="mr-3 d-inline-flex text-center"></p>
        <img class="avatar_navbar" src="../../assets/images/avatar.png" alt="Avatar" />
        <p class="ml-4 d-inline-flex text-center">{{ user.name }}</p>
        <button class="btn">
          <i class="material-icons icon_color_primary mt-2">keyboard_arrow_down</i>
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
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import { deleteLocalToken } from '../../modules/auth/storage'

export default {
  computed: {
    ...mapState('auth', ['user']),
    routes () {
      return this.$router.options.routes.filter(
        route => route.meta && route.meta.showNavbar
      )
    },
    deletar () {
      deleteLocalToken()
      return location.reload()
    }
  }
}
</script>

<style lang="scss">
.navbar-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  width: 100%;
  z-index: 10;
}
.spacer {
  border-left: 2px solid #eff4f6;
  height: 56px;
}
.spacer-h{
  border-top: 2px solid #6e6f74;
  width: 90px;
  height: 2px;
}
.logo_navbar{
  width: 50%;
  display: flex;
  margin: auto;
}
.avatar_navbar{
  width: 50px;
  margin: auto;
}
.icon_color_primary{
  color: #a6abb3;
}
.input_container{
  display: inline-block;
  text-align: center;
}
.awsome_input{
  padding: 5px 10px;
  border: none;
  background: transparent;
  display: block;
  width: 400px;
}
.awsome_input:focus{
  border-bottom: 1px solid #117A25;
  padding: 5px 10px;
  outline: none;
}
.icon_sidebar{
  border: 0em;
  padding-top: 11px;
  padding-bottom: 6px;
  color: #969CBA;
  margin-bottom: 20px;
}
.icon_sidebar:hover{
  color: #117A25;
  background-color: #FFFFFF;
  border-radius: 10px;
}
.icon_bar{
  justify-items: center;
}
</style>
