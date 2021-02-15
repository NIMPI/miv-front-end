<template>
  <div class="container-componente">
    <h1 style="font-family: 'Khula', sans-serif;">Arquivos</h1>
    <h6 style="font-family: 'Khula', sans-serif;">Instituto Federal de Rondonia</h6>
    <div class="float-right mb-3">
    <router-link :to="{ name: 'Metadados' }">
      <button class="btn btn-success mr-3">Novo Documento</button>
    </router-link>
    <button v-on:click="view()" class="btn btn-info ml-4">Atualizar</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tamanho</th>
          <th>Tipo</th>
          <th>Descrição</th>
          <th>Data de Upload</th>
          <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(doc, id) in docs" v-bind:key="id">
          <td class="nome" data-title="Nome">{{ doc.title }}</td>
          <td class="tamanho" data-title="Tamanho">{{ doc.size + ' Mb'}}</td>
          <td class="tipo" data-title="Tipo">{{ doc.type }}</td>
          <td class="descricao" data-title="Descrição">{{ doc.description }}</td>
          <td class="data" data-label="Data de Upload">{{ new Date(doc.dateCreated).toLocaleString() }}</td>
          <td class="icons">
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
    <nav class="pag">
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
template{
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
.nome{
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 16rem;
  max-height: 2rem;
}
.tamanho{
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 10rem;
  max-height: 2rem;
  overflow: hidden !important;
}
.tipo{
  max-width: 7rem;
  max-height: 2rem;
  overflow: hidden !important;
}
.descricao{
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 30rem;
  max-height: 2rem;
  overflow: hidden !important;
}
.data{
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 9rem;
  max-height: 2rem;
  overflow: hidden !important;
}
.icons{
  text-align: center;
}

table{
  font-family: sans-serif;
  width: 100%;
  border-collapse: collapse !important;
}
th{
  background-color: #333;
  color: #fff;
}
th, td{
  padding: .8rem;
  font-size: 1.2rem;
}
td{
  max-height: 15px;
}
tbody{
  background-color: #eee;
  color: #555;
}
.pag{
  padding-top: 1.5rem;
}

@media screen and (max-width: 600px){
  template{
    overflow-x: hidden !important;
    overflow-y: scroll !important;
  }

  thead{
    display: none;
  }
  td{
    display: block;
    overflow: hidden;
  }
  .nome{
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100vw;
    max-height: 15vw;
  }
  .tamanho{
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100vw;
    max-height: 15vw;
  }
  .tipo{
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100vw;
    max-height: 15vw;
  }
  .descricao{
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100vw;
    max-height: 15vw;
  }
  .data{
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100vw;
    max-height: 15vw;
  }
  .icons{
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100vw;
    max-height: 15vw;
  }

  td:first-child{
    background-color: #333;
    color: #fff;
    text-align: center;
  }

  td:nth-child(2)::before{
    content: "Tamanho";
  }

  td:nth-child(3)::before{
    content: "Tipo";
  }

  td:nth-child(4)::before{
    content: "Descrição";
  }

  td:nth-child(5)::before{
    content: "Data";
  }

  td{
    text-align: right;
  }

  td::before{
    float: left;
    margin-right: 3rem;
    font-weight: bold;
  }
}
</style>
