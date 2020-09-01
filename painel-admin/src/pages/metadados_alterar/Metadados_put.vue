<template>
  <div class="container_componente">
    <h1 class="mt-4" style="font-family: 'Khula', sans-serif;">Alterar Documento</h1>
    <h6 style="font-family: 'Khula', sans-serif;">NIMPI - Instituto Federal de Rondonia</h6>
      <button v-on:click="teste()" class="mt-5 btn btn-warning nav p-2 pr-3">
        <i class="material-icons mr-3">done</i>Teste
      </button>
      <form class="mt-5" @submit.prevent="submit()">
      <div alt="Nome do arquivo" class="form-group">
        <label>Nome do arquivo:</label>
        <input
          v-model="title"
          type="text"
          class="form-control"
          placeholder="Correio Popular"
          id="title"
        />
      </div>
      <div alt="Data" class="form-group">
        <label>Data de publicação:</label>
        <input v-model="date" type="date" class="form-control" id="date" />
      </div>
      <div alt="Descrição" class="form-group">
        <label>Descrição:</label>
        <textarea
          v-model="description"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div alt="Tipo do arquivo" class="form-group">
        <label>Tipo de arquivo:</label>
        <select v-model="type" class="form-control" id="exampleFormControlSelect1">
          <option>Jornal</option>
          <option>Áudio</option>
          <option>Video</option>
          <option>Livro</option>
          <option>Documento</option>
          <option>Outros</option>
        </select>
      </div>
      <label>Upload:</label>
      <div alt="Entrada de arquivo" class="form-group">
        <label class="file" style="">
          <input request v-on:change="handleFileUpload()" type="file" id="file" aria-label="File browser example">
          <span class="file-custom"></span>
        </label>
      </div>
      <button alt="Enviar" type="submit" class="mt-5 btn btn-success nav p-2 pr-3">
        <i class="material-icons mr-3">done</i>Publicar
      </button>
    </form>

  </div>
</template>
<script>
export default {
  name: 'Metadadosput',
  data: function () {
    return {
      title: '',
      date: '',
      description: '',
      type: '',
      path: null,
      doc: []
    }
  },
  created: function () {
    this.$http.get('http://localhost:3000/v1/document/5f2f68f8bd52a06f9cd34cf3').then(res => { this.doc = res.body })
  },
  methods: {
    async teste () {
      this.title = this.doc.title
      this.date = this.doc.createdAt.substring(0, 10)
      this.description = this.doc.description
      this.type = this.doc.type
      this.path = this.doc.path
    },
    handleFileUpload () {
      this.path = event.target.files[0]
    },
    async submit () {
      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('date', this.date)
      formData.append('description', this.description)
      formData.append('type', this.type)
      formData.append('path', this.path)
      this.$http.put('http://localhost:3000/v1/document', formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => { console.log(res) })
    }
  }
}
</script>
<style>
</style>
