<template>
  <div class="container_componente">
    <h1 class="mt-4" style="font-family: 'Khula', sans-serif;">Alterar Documento</h1>
    <h6 style="font-family: 'Khula', sans-serif;">NIMPI - Instituto Federal de Rondonia</h6>
      <form class="mt-5" @submit.prevent="submit()">
      <div alt="Nome do arquivo" class="form-group">
        <label>Nome do arquivo:</label>
        <input
          v-model="doc.title"
          type="text"
          class="form-control"
          placeholder=""
          id="title"
        />
      </div>
      <div alt="Data" class="form-group">
        <label>Data de publicação:</label>
        <input
        v-model="doc.dateCreated.substr"
        type="date"
        class="form-control"
        />
      </div>
      <div alt="Descrição" class="form-group">
        <label>Descrição:</label>
        <textarea
          v-model="doc.description"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div alt="Tipo do arquivo" class="form-group">
        <label>Tipo de arquivo:</label>
        <select v-model="doc.type" class="form-control" id="exampleFormControlSelect1">
          <option>Jornal</option>
          <option>Áudio</option>
          <option>Video</option>
          <option>Livro</option>
          <option>Documento</option>
          <option>Outros</option>
        </select>
      </div>
      <label>Insira um novo arquivo:</label>
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
    try {
      this.$http.get(`http://localhost:3000/v1/document/${this.$route.params.id}`).then(res => {
        this.doc = res.body
      })
    } catch {
      console.log('Deu erro ao puxar o documento')
      alert('Erro ao enviar o documento')
    }
  },
  methods: {
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
