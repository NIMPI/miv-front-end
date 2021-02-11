<template>
  <div class="container-componente">
    <h1 style="font-family: 'Khula', sans-serif;">Arquivos</h1>
    <h6 style="font-family: 'Khula', sans-serif;">Instituto Federal de Rondonia</h6>
    <div class="float-right mb-5">
    <router-link :to="{ name: 'Metadados' }">
      <button class="btn btn-success mr-3">Novo Documento</button>
    </router-link>
    <button v-on:click="view()" class="btn btn-info ml-4">Atualizar</button>
    </div>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Tamanho</th>
          <th scope="col">Tipo</th>
          <th scope="col">Descrição</th>
          <th scope="col">Data de Upload</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr style="height:60px;" v-for="(doc, id) in docs" v-bind:key="id">
          <td data-title="Nome" style="width:400px;">{{ doc.title }}</td>
          <td data-title="Tamanho">{{ doc.size + ' Mb'}}</td>
          <td data-title="Tipo">{{ doc.type }}</td>
          <td data-title="Descrição" style="width:400px;">{{ doc.description }}</td>
          <td data-label="Data de Upload">{{ new Date(doc.dateCreated).toLocaleString() }}</td>
          <td>
            <router-link :to="{ name: 'Metadadosput', params:{id: (doc._id)} }">
              <button class="btn btn-primary mr-3">
                <i class="material-icons d-flex justify-content-center">create</i>
              </button>
            </router-link>
            <button v-on:click="delet(doc._id)" class="btn btn-danger">
              <i class="material-icons d-flex justify-content-center">delete</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination" >
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li v-for="page in pages" :class="{ active: pagination.page === page }" class="page-item" v-bind:key="page">
          <a class="page-link" href="#" v-on:click="navigate(page)">{{page}}</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { range } from 'lodash'
export default {
  name: 'Arquivos',
  data: function () {
    return {
      docs: [],
      pages: {},
      pagination: {},
      numPage: 1
    }
  },
  created: function () {
    try {
      this.$http.get('http://localhost:3000/v1/document?limit=9&page=' + this.numPage).then(res => {
        this.docs = res.body.docs
        this.pagination = res.body
        this.pages = range(1, this.pagination.totalPages + 1)
      })
    } catch (err) {
      console.log(err + 'Erro no retorno dos documentos')
    }
  },
  methods: {
    async view () {
      this.$http.get('http://localhost:3000/v1/document?limit=9&page=' + this.numPage).then(res => {
        this.docs = res.body.docs
        this.pagination = res.body
        this.pages = range(1, this.pagination.totalPages + 1)
      })
    },
    navigate (page) {
      this.numPage = page
      try {
        this.view()
      } catch (err) {
        console.log(err + 'Erro no retorno dos documentos')
      }
    },
    delet (id) {
      try {
        this.$http.delete(`http://localhost:3000/v1/document/` + id).then(res => {
          alert('Excluido com Sucesso !')
        })
      } catch (err) {
        console.log(err)
      } finally {
        this.view()
      }
    }
  }
}
</script>
<style>
th{
  padding:10px 15px;
}
table{
  width: 100%;
  max-width: 1220px;
  margin: 0px auto;
  box-shadow: 0px 4px 20px rgba(5, 577, 94, .5);
  -moz-box-shadow: 0px 4px 20px rgba(5, 577, 94, .5);
  -webkit-box-shadow: 0px 4px 20px rgba(5, 577, 94, .5);
}

@media screen and (max-width:767px) {
  table thead{display: none;}
  table tbody{padding:0 16px;}
  table tbody, table tbody tr{display: block; width: 100%;}
  table tbody tr th::before, table tbody tr td::before{content: attr(data-title); display: block;}
  table tbody tr td
  table tbody tr th{display: block; width: 50%; float: left;}
  table tbody tr{margin-bottom: 16px; float: left; clear: both; box-shadow: 0px 4px 20px rgba(5, 577, 94, .5);
  -moz-box-shadow: 0px 4px 20px rgba(5, 577, 94, .5);
  -webkit-box-shadow: 0px 4px 20px rgba(5, 577, 94, .5);}
}
</style>
