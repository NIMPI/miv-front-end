<template>
  <div class="container_componente">
    <h1 class="mt-4" style="font-family: 'Khula', sans-serif;">Metadados</h1>
    <h6 style="font-family: 'Khula', sans-serif;">Instituto Federal de Rondonia</h6>
    <form class="mt-5" @submit.prevent="submit()">
      <div alt="name" class="form-group">
        <label>Nome do arquivo:</label>
        <input v-model="arquivo.title" type="text" class="form-control" placeholder="Correio Popular" />
      </div>
      <div alt="Date" class="form-group">
        <label for="exampleInputPassword1">Data de publicação:</label>
        <input v-model="arquivo.date" type="date" class="form-control" id="exampleInputPassword1" />
      </div>
      <div alt="Descrição" class="form-group">
        <label for="exampleFormControlTextarea1">Descrição: </label>
        <textarea v-model="arquivo.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div alt="Tipo_arquivo" class="form-group">
        <label for="exampleFormControlSelect1">Tipo de arquivo: </label>
        <select v-model="arquivo.type" class="form-control" id="exampleFormControlSelect1">
          <option>Jornal</option>
          <option>Áudio</option>
          <option>Video</option>
          <option>Livro</option>
          <option>Documento</option>
          <option>Outros</option>
        </select>
      </div>
      <div alt="Entrada de arquivo" class="form-group">
        <label>Upload:</label>
        <input @change="handlefile" type="file" class="form-control-file" />
      </div>
      <button type="submit" class="mt-5 btn btn-success nav p-2 pr-3"><i class="material-icons mr-3">done</i>Publicar</button>
    </form>
  </div>
</template>
<script>

import Services from './services'
export default {
  name: 'Metadados',
  props: {
    value: File
  },
  data () {
    return {
      arquivo: {
        title: '',
        date: '',
        description: '',
        path: 'titulo.1.jpg'
      },
      arquivos: []
    }
  },
  methods: {
    handlefile (e) {
      this.$emit('input', e.target.files[0])
    },
    submit () {
      try {
        Services.salvar(this.arquivo).then(Response => { alert('Enviado') })
      } catch (err) {
        alert(err.data ? err.data.message : 'Não foi possível enviar o arquivo')
      }
    }
  }
}
</script>
<style>
</style>
