<template>
  <div class="container-componente">
    <h1 style="font-family: 'Khula', sans-serif;">Bem vindo, {{ user.name }} ;)</h1>
    <h6 style="font-family: 'Khula', sans-serif;">Instituto Federal de Rondonia</h6>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card-animate">
          <div class="col-4">
            <div class="card border">
              <div class="card-body">
                <div class="card-title">
                  63
                </div>
                <p class="card-text">Arquivos Disponíveis</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card border">
              <div class="card-body2">
                <div class="card-title">
                  358
                </div>
                <p class="card-text">Acessos</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card border">
              <div class="card-body3">
                <div class="card-title">
                  1000
                </div>
                <p class="card-text">Frame 3</p>
                </div>
            </div>
          </div>
        </div>
      </div>
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
<style lang="scss">
template{
  font-family: 'Khula', sans-serif;
}
.card {
  transition: .5s ease;
  border-radius: 0;
  max-width: 750px;
  &:hover {
    box-shadow: 0px 0px 18px -4px rgba(143, 143, 143, 0.726);
  }
  &-body {
    position: relative;
    z-index: 0;
    overflow: hidden;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  &-body2 {
    position: relative;
    z-index: 0;
    overflow: hidden;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  &-body3 {
    position: relative;
    z-index: 0;
    overflow: hidden;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
.card-animate {
  display: flex;
  flex-direction: row;
  .card-body {
    &:before {
      transition: .5s ease;
      content: "63";
      display: block;
      font-size: 15rem;
      font-weight: 900;
      position: absolute;
      bottom: 5rem;
      line-height: 0;
      left: -.85rem;
      padding: 0;
      margin: 0;
      color: rgba(0,0,0,.10);
      z-index: 0;
    }
  }
  .card-body2 {
    &:before {
      transition: .5s ease;
      content: "2";
      display: block;
      font-size: 15rem;
      font-weight: 900;
      position: absolute;
      bottom: 5rem;
      line-height: 0;
      left: -.85rem;
      padding: 0;
      margin: 0;
      color: rgba(0,0,0,.10);
      z-index: 0;
    }
  }
  .card-body3 {
    &:before {
      transition: .5s ease;
      content: "3";
      display: block;
      font-size: 15rem;
      font-weight: 900;
      position: absolute;
      bottom: 5rem;
      line-height: 0;
      left: -.85rem;
      padding: 0;
      margin: 0;
      color: rgba(0,0,0,.10);
      z-index: 0;
    }
  }
  .card {
    &:hover {
      .card-body {
        &:before {
          transform: translate(10px,-10px);
        }
      }
      .card-body2 {
        &:before {
          transform: translate(10px,-10px);
        }
      }
      .card-body3 {
        &:before {
          transform: translate(10px,-10px);
        }
      }
    }
  }
  .card-title {
    font-size: 48px;
    font-weight: 900;
    text-transform: uppercase;
  }
}
</style>
