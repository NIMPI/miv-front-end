<template>
  <div class="container_componente">
    <h1 class="mt-4" style="font-family: 'Khula', sans-serif;">Arquivos</h1>
    <h6 style="font-family: 'Khula', sans-serif;">Instituto Federal de Rondonia</h6>
    <router-link :to="{ name: 'Metadados' }">
      <button class="btn btn-success">Novo Documento</button>
    </router-link>
    <button class="btn btn-warning">Alterar Documento</button>
    <button class="btn btn-danger">Deletar Documento</button>
  </div>
</template>

<script>
export default {
  name: 'Watchlist',
  mounted () {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style>
</style>
