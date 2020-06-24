<template>
  <div class="container_componente">
    <h1 class="mt-4" style="font-family: 'Khula', sans-serif;">Metadados</h1>
    <h6 style="font-family: 'Khula', sans-serif;">Instituto Federal de Rondonia</h6>
    <form class="mt-5">
      <div alt="name" class="form-group">
        <label>Nome do arquivo:</label>
        <input type="text" class="form-control" placeholder="João Silva" />
      </div>
      <div alt="Date" class="form-group">
        <label for="exampleInputPassword1">Data de publicação:</label>
        <input type="date" class="form-control" id="exampleInputPassword1" />
      </div>
      <div alt="Descrição" class="form-group">
        <label for="exampleFormControlTextarea1">Descrição: </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div alt="Tipo_arquivo" class="form-group">
        <label for="exampleFormControlSelect1">Tipo de arquivo: </label>
        <select class="form-control" id="exampleFormControlSelect1">
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
        <input type="file" class="form-control-file" />
      </div>
      <button type="submit" class="mt-5 btn btn-success nav p-2 pr-3"><i class="material-icons mr-3">done</i>Publicar</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Metadados',
  components: {

  }
}
</script>

<style>
</style>
