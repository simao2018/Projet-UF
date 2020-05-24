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
    { path: '/profil', name: 'profil',  component: Profil },
    { path: '/erreur', component: Erreur },
    { path: '/vendre', component: Vendre },
    { path: '/backoffice', component: Backoffice },
    { path: '/:id_livre', name: 'livre', component: Encheres }
    
  ]
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
