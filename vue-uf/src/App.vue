<!-- On crée nos trois balises Template Script Style -->
<template>
  <div id="app">
    <nav class="row navbar navbar-expand-lg bg-danger">
      <a class="navbar-brand" href="#">
        <router-link to="/">Book Paradise</router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <router-link to="/home">Accueil</router-link>
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Enchères en cours</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Livre</a>
              <a class="dropdown-item" href="#">Bandes dessinés</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Roman</a>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <router-link to="/vendre">Vendre un object</router-link>
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/faq">Faq</router-link>
            </a>
          </li>
        </ul>
        <div class="my-2 my-lg-0">
          <a class="nav-link" href="#">
            <router-link to="/login">Connexion&emsp;</router-link>|
            <router-link to="/register">Inscription</router-link>
          </a>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "@/components/Home";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home
  }
};
</script>


<style scoped>
.router-link-active {
  color: #fff;
  margin-left: 10px;
}
.router-link-active:hover {
  color: #fff;
}

nav .nav-link a {
  color: white;
}
nav .nav-link {
  color: white;
}

nav .nav-link a:hover {
  color: white;
}
nav .nav-link:hover {
  color: white;
}
.bg-danger {
  /*background-color: #dc3545!important;*/
  background: linear-gradient(to right, #ff105f, #ffad06);
}
</style>
