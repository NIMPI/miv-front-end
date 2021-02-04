<template>
  <nav class="sidenav">
    <ul class="sidenav-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'Home' }" >
          <a class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="white" width="32px" height="32px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            <span class="link-text">Home</span>
          </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'Arquivos' }">
          <a class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="white" width="32px" height="32px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            <span class="link-text">Arquivos</span>
          </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'Config' }">
          <a href="" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="white" width="32px" height="32px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
            <span class="link-text">Configurações</span>
          </a>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['user']),
    routes () {
      return this.$router.options.routes.filter(
        route => route.meta && route.meta.showNavbar
      )
    }
  }
}
</script>
<style lang="scss">
:root {
  font-size: 16px;
  font-family: 'Open Sans';
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
  --transition-speed: 600ms;
}

body {
  color: black;
  background-color: white;
  margin: 0;
  padding: 0;
}

.sidenav {
  position: fixed;
  background-color: var(--bg-primary);
  transition: width 600ms ease;

}

.sidenav-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 150px;
}

.nav-item {
  width: 100%;
}

.nav-item:last-child {
  margin-top: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: var(--bg-secondary);
  color: var(--text-secondary);
}

.link-text {
  display: none;
  margin-left: 1rem;
}

.nav-link svg {
  width: 2rem;
  min-width: 2rem;
  margin: 0 0.5rem;
}

.fa-primary {
  color: #ff7eee;
}

.fa-secondary {
  color: #df49a6;
}

.fa-primary,
.fa-secondary {
  transition: var(--transition-speed);
}

.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
}

.logo svg {
  transform: rotate(0deg);
  transition: var(--transition-speed);
}

.logo-text
{
  display: inline;
  position: absolute;
  left: -999px;
  transition: var(--transition-speed);
}

.sidenav:hover .logo svg {
  transform: rotate(-180deg);
}

/* Small screens */
@media only screen and (max-width: 600px) {
  .sidenav {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .logo {
    display: none;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .nav-link {
    justify-content: center;
  }

  main {
    margin: 0;
  }
}

/* Large screens */
@media only screen and (min-width: 600px) {
  .sidenav {
    top: 0;
    width: 5rem;
    height: 100vh;
  }

  .sidenav:hover {
    width: 16rem;
  }

  .sidenav:hover .link-text {
    display: inline;
  }

  .sidenav:hover .logo svg
  {
    margin-left: 11rem;
  }

  .sidenav:hover .logo-text
  {
    left: 0px;
  }
}

.dark {
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
}

.light {
  --text-primary: #1f1f1f;
  --text-secondary: #000000;
  --bg-primary: #ffffff;
  --bg-secondary: #e4e4e4;
}

.solar {
  --text-primary: #576e75;
  --text-secondary: #35535c;
  --bg-primary: #fdf6e3;
  --bg-secondary: #f5e5b8;
}

.theme-icon {
  display: none;
}

.dark #darkIcon {
  display: block;
}

.light #lightIcon {
  display: block;
}

.solar #solarIcon {
  display: block;
}
</style>
