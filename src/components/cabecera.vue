<template lang="html">

<section class="cabecera">
  <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-between" style="background-color: #ABACAB ">
    <div class="derecha">
      <router-link to="/">
      <div class="d-flex">
        <a style="font-style:none;" class="navbar-brand">
          <div style="display:flex; flex-direction:row; align-items:center;">
            <img alt="GameDeal logo" src="../assets/logo.png" width="110">
            <h2  class="d-none d-sm-block" style="color: white;font-family: 'Sen', sans-serif;">GameDeal</h2>
          </div>
        </a>
      </div>
    </router-link>
    </div>
    <div class="izquierda px-3">
     
      
        <div class="navbar-nav justify-content-center justify-content-sm-end" style=" display:flex; flex-direction:row; flex-wrap: wrap; align-items: center;">
          
          <div class="nav-item  d-flex flex-sm-column flex-row" v-if="user.loggedIn">
            <router-link class="btn btn-primary" to="/add">&#8682;</router-link>
            <label class="d-none">Subir Producto</label>
          </div>
          <div class="nav-item  mx-2  d-flex flex-sm-column flex-row" v-if="!user.loggedIn">
            <router-link to="/login"> <a class="nav-link" href="#">Login</a></router-link>
          </div>
          <div class="nav-item  mx-2  d-flex flex-sm-column flex-row" v-if="user.loggedIn">
            <router-link to="/user"><div class="d-flex"><img v-bind:src="user.data.photoURL" width="50" style="border-radius:100%"><div class=" d-flex "><p class="nombre d-none d-sm-block text-warn mx-1" style="margin:auto;align-text:center; " >{{user.data.displayName}}</p></div></div></router-link>
          </div>
          <div class="nav-item  ml-2  d-flex flex-sm-column flex-row">
            <router-link to="/"><button class="btn btn-danger ml-3 mr-3" v-if="user.loggedIn"  @click.prevent="logout"> <span>Cerrar Sesión</span></button></router-link>
          </div>
        </div>
      
    </div>
  </nav>
      
  
  </section>

</template>

<script lang="js">
  
  import firebase from "../db.js"
  import Firebase from "firebase"
  
  
  export default  {
    name: 'cabecera',
    props: [],
    
    data () {
      return {
        user:{
          loggedIn: false,
          data:{}
        }
      }
    },
    methods: {
      logout(){
        firebase.logout()
        this.$router.replace({ name: "home" });
        this.user.loggedIn= false;
        this.$notify({
            group: 'notificacion',
            title: 'Hasta luego',
            text: 'Has cerrado sesión correctamente',
            type: 'success'
            });
        
      }
      
    },
    mounted: function(){
      Firebase.auth().onAuthStateChanged(user => {
        if (user){
          this.user.loggedIn = true;
          this.user.data = user;
          if(user.email=="administrador@gmail.com"){
          this.administrador=true
          }
        }
        else{
          this.user.loggedIn = false;
          this.user.data = {};
          this.administrador=false;
        
          
        }
      })
    }
    
    
    
    
      
  
  
}


</script>
<style lang="css">

.navbar{
  background: rgb(113,113,119);
background: radial-gradient(circle, rgba(113,113,119,1) 0%, rgba(177,177,177,1) 100%);
}

a:link{
  text-decoration: none!important;
}

.nombre{
  color: rgb(172, 42, 172) !important
}

</style>
