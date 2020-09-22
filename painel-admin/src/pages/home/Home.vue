<template>
  <div class="container_componente">
    <h1 class="mt-4" style="font-family: 'Khula', sans-serif;">Bem vindo, {{ user.name }} ;)</h1>
    <h6 style="font-family: 'Khula', sans-serif;">Instituto Federal de Rondonia</h6>
    <div class="pt-4 d-flex flex-row justify-content-between">
      <div class="p-2 card">
        <div class="icon"><i class="material-icons">folder</i></div>
        <h3>63</h3>
        <p>Documentos disponíveis</p>
      </div>
      <div class="p-2 card">
        <div class="icon"><i class="material-icons">folder</i></div>
        <h3>63</h3>
        <p>Documentos disponíveis</p>
        </div>
      <div class="p-2 card">
        <div class="icon"><i class="material-icons">folder</i></div>
        <h3>63</h3>
        <p>Documentos disponíveis</p>
        </div>
      <div class="p-2 card">
        <div class="icon"><i class="material-icons">folder</i></div>
        <h3>63</h3>
        <p>Documentos disponíveis</p>
        </div>
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
      return this.$router.options.routes.filter(
        (route) => route.meta && route.meta.showNavbar
      )
    }
  }
}
</script>
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border: 1px solid black;
}
.icon{
}
</style>
