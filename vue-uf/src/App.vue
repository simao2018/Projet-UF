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
              <a class="dropdown-item" href="#">
                <router-link to="/encheres">Livre</router-link>
              </a>
              <a class="dropdown-item" href="#">
                <router-link to="/encheres">Bandes déssines</router-link>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Romans</a>
            </div>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <template v-if="user.loggedIn">
                <router-link to="/vendre">Vendre un livre</router-link>
              </template>
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
          <ul class="navbar-nav mr-auto">
            <template v-if="user.loggedIn">
              <li class="nav-item mr-auto">
                <router-link
                  class="nav-link"
                  :to="{ name: 'profil', params :{ id_login:currentId} }"
                >{{ currentUser }}</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link logout" @click.prevent="signOut">Deconnexion</a>
              </li>
            </template>
            <template v-else>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <router-link to="/login">Connexion</router-link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <router-link to="/register">Inscription</router-link>
                </a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "@/components/Home";
import { mapGetters } from "vuex";
import firebase from "firebase";
import db from "./components/firebaseInit";

export default {
  data: () => {
    return {
      users: [],
      currentUser: false,
      currentId: null
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  created() {
    var user = firebase.auth().currentUser;

    if (user) {
      this.currentUser = user.email;
      // this.users.push(user.email);
      db.collection("users")
        .where("users_email", "==", this.currentUser)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              users_id: doc.data().users_id,
              users_email: doc.data().users_email,
              users_name: doc.data().users_name
            };
            this.users.push(data);
            this.currentId = this.users[0].users_id;
            console.log(this.currentId);
          });
        });
      console.log(this.currentUser);
    } else {
      // No user is signed in.
    }
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    }
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
  text-decoration: none;
}
.logout:hover {
  cursor: pointer;
}
.bg-danger {
  /*background-color: #dc3545!important;*/
  background: linear-gradient(to right, #ff105f, #ffad06);
}
</style>
