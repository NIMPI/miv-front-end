<template>
  <div class="container-componente">
    <h1>Bem vindo, {{ user.name }} ;)</h1>
    <h6>Instituto Federal de Rondonia</h6>
  <div class="">
    <div class="row">
      <div class="col-lg-12">
        <div class="row card-animate">
          <div class="col-4">
            <div class="card border">
              <div class="card-body">
                <div class="card-title">
                  Card Title 1
                </div>
                <p class="card-text">Card Body</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card border">
              <div class="card-body">
                <div class="card-title">
                  Card Title 2
                </div>
                <p class="card-text">Card Body</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card border">
              <div class="card-body">
                <div class="card-title">
                  Card Title 3
                </div>
                <p class="card-text">Card Body</p>
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
}
.card-animate {
  counter-reset: section;
  .card-body {
    &:before {
      transition: .5s ease;
      counter-increment: section;
      content: "" counter(section) "";
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
    }
  }
  .card-text {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .card-title {
    font-weight: 900;
    text-transform: uppercase;
  }
}
</style>
