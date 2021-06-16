import Vue from 'vue';
import Router from 'vue-router';

import login from '../components/login.vue'
import home from '../components/home.vue'
import registrar from '../components/registrar.vue'
import usuario from '../components/usuario.vue'
import añadir from '../components/añadir.vue'


import firebase from 'firebase'



Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/login',
        name: 'login',
        component: login
    },
   
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/signup',
        name: 'signup',
        component: registrar
    },
    {
      path:'/user',
      name: 'user',
      component: usuario
    },
    {
      path: '/add',
      name: 'add',
      component: añadir
    }

    
]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(data => data.meta.requiresAuth)){
      const user = firebase.auth().currentUser;
      if (user) {
        next()
      }else{
         next({
           name: 'login'
         })
       }
      }else{
        next();
      }
   })
export default router