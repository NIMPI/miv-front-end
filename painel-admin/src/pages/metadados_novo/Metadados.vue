<template>
  <div class="container-componente">
    <h1 class="mt-4" style="font-family: 'Khula', sans-serif;">Novo Documento</h1>
    <h6 style="font-family: 'Khula', sans-serif;">NIMPI - Instituto Federal de Rondonia</h6>
    <form class="mt-5" @submit.prevent="submit()">
      <div alt="name" class="form-group">
        <label>Nome do arquivo:</label>
        <input
          v-model="title"
          type="text"
          class="form-control"
          placeholder="Correio Popular"
          required
        />
      </div>
      <div alt="Date" class="form-group">
        <label for="exampleInputPassword1">Data de publicação:</label>
        <input v-model="date" type="date" class="form-control" required />
      </div>
      <div alt="Descrição" class="form-group">
        <label for="exampleFormControlTextarea1">Descrição:</label>
        <textarea
          v-model="description"
          class="form-control"
          required
          rows="3"
        ></textarea>
      </div>
      <div alt="Tipo_arquivo" class="form-group">
        <label for="exampleFormControlSelect1">Tipo de arquivo:</label>
        <select v-model="type" class="form-control" required>
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
          <input request v-on:change="handleFileUpload()" type="file" id="file" aria-label="File browser example" required>
          <span class="file-custom"></span>
        </label>
      </div>
      <button type="submit" class="mt-5 btn btn-success nav p-2 pr-3">
        <i class="material-icons mr-3">done</i>Publicar
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Metadados',
  data: function () {
    return {
      title: '',
      date: '',
      description: '',
      type: '',
      path: null
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
      try {
        this.$http.post('http://localhost:3000/v1/document', formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => {
          alert('Enviado com sucesso !')
          this.$router.push({ name: 'Arquivos' })
        })
      } catch (err) {
        alert('Não foi possivel enviar !' + err)
      }
    }
  }
}
</script>
<style>
</style>
