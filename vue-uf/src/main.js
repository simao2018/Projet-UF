import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "./components/Home";
import Faq from "./components/Faq";
import Login from "./components/Login";
import Profil from "./components/Profil";
import Erreur from "./components/Erreur";
import Register from "./components/Register";
import Vendre from "./components/Vendre";
import Encheres from "./components/Encheres";
import Backoffice from "./components/Backoffice";
import firebase from "firebase"
import Viewuser from "./components/Viewuser";
import Newuser from "./components/Newuser";

import store from "./store"

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.use(VueRouter);

Vue.config.productionTip = false



const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/faq', component: Faq },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profil/:id_login', name: 'profil', component: Profil },
    { path: '/erreur', component: Erreur },
    { path: '/vendre', component: Vendre },
    { path: '/backoffice', component: Backoffice },
    { path: '/viewuser/:idUser', name: 'view-user', component: Viewuser },
    { path: '/newuser', name: 'new-user', component: Newuser },
    { path: '/:id_livre', name: 'livre', component: Encheres }

  ]
});

let app;
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
    console.log(user);
  }
})


