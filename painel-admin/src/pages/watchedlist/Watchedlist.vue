<template>
  <div class="container_componente">
    <h1 class="mt-4" style="font-family: 'Khula', sans-serif;">Metadados</h1>
    <h6 style="font-family: 'Khula', sans-serif;">Instituto Federal de Rondonia</h6>
    <form class="mt-5">
      <div alt="name" class="form-group w-50">
        <label for="exampleInputEmail1">Nome do arquivo:</label>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="João Silva" />
      </div>
      <div alt="Date" class="form-group w-50">
        <label for="exampleInputPassword1">Data de publicação:</label>
        <input type="date" class="form-control" id="exampleInputPassword1" />
      </div>
      <div alt="Descrição" class="form-group w-50">
        <label for="exampleFormControlTextarea1">Descrição: </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div alt="Tipo_arquivo" class="form-group w-50">
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
      <div alt="File Input" class="form-group">
        <label for="exampleFormControlFile1">Upload:</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
      </div>
      <button type="submit" class="mt-5 btn btn-success nav p-2 pr-3"><i class="material-icons mr-3">done</i>Publicar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SerieBox from "@/components/SerieBox";

export default {
  name: "Watchedlist",
  components: {

  },
};
</script>

<style>
</style>
