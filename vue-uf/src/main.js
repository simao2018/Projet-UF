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
import Backoffice from "./components/Backoffice"
import Newuser from "./components/Newuser"
import Edituser from "./components/Edituser"
import Viewuser from "./components/Viewuser"

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
    { path: '/profil', component: Profil },
    { path: '/erreur', component: Erreur },
    { path: '/vendre', component: Vendre },
    { path: '/backoffice', component: Backoffice },
    { path: '/new', component: Newuser },
    { path: '/edit/:user_id', component: Edituser },
    { path: '/:user_id', component: Viewuser },
    { path: '/livre:id', name: 'livre', component: Encheres }

  ]
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
