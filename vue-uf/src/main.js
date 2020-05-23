import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Home from "./components/Home";
import Faq from "./components/Faq";
import Login from "./components/Login";
import Profil from "./components/Profil";
import Erreur from "./components/Erreur";
import Register from "./components/Register"
import Vendre from "./components/Vendre"
import Encheres from "./components/Encheres"


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/faq', component: Faq },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profil', component: Profil },
    { path: '/erreur', component: Erreur },
    { path: '/vendre', component: Vendre },
    { path: '/encheres', component: Encheres }

  ]
});

const firebaseConfig = {
  apiKey: "AIzaSyCmzNx6oJ3Lf4tOC12lOpBte6sBeQTVmQQ",
  authDomain: "projet-uf-prod.firebaseapp.com",
  databaseURL: "https://projet-uf-prod.firebaseio.com",
  projectId: "projet-uf-prod",
  storageBucket: "projet-uf-prod.appspot.com",
  messagingSenderId: "348468085229",
  appId: "1:348468085229:web:43332334da5b48e69c27e4"
};
//r
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
