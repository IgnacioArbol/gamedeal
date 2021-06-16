<template>
     
 
 <section>
    <h1 class="titulo mt-5 mb-3">Usuario</h1>
    <div style="display: grid; grid-template-row: 1fr 1 fr 1fr; grid-template-column: 1fr 1 fr;">
        <p style="grid-column: 2/3;">{{user.data.displayName}}</p>
        <p style="grid-column: 1/2; grid-row: 1/4;"><img v-bind:src="user.data.photoURL"></p>
        <p style="grid-column: 2/3;">Correo: {{user.data.email}}</p>
        <div class="d-flex justify-content-center">
          <button class="btn btn-danger " style="width:100px;" @click="eliminarcuenta"> Eliminar cuenta</button>
        </div>
        <router-link to="/add">
        <div>
        <button class="btn btn-success my-5">
            Añadir nuevo producto
        </button>
        </div>
        </router-link>
        <div class="d-flex justify-content-center my-5">
          <button class="btn btn-dark" @click="mostrar" v-if="!mostrarArticulos">Mostrar mis articulos</button>
          <button class="btn btn-dark" @click="mostrar" v-if="mostrarArticulos">Esconder mis articulos</button>
        </div>
    </div>
    
    <div class="contenedor d-flex flex-row flex-wrap justify-content-around ml-5 mr-5 " v-if="mostrarArticulos">
    <div class="producto border shadow bg-white rounded px-2 my-3 mx-2 mx-auto pr-2 pl-2 mt-3 mb-3 mr-2 ml-2" v-for="producto in productosFinal" v-bind:key="producto.id">
      <div>
      <img class="imagen rounded img-top my-2" style="width:250px; height:250px; object-fit: contain; border" v-bind:src="producto.foto">
      
      </div>
      <h4 class="mt-3">{{producto.nombre}}</h4>
      <p>{{producto.descripcion}}</p>
      <p class="precio">{{producto.precio}}€</p>
      <p>tag: {{producto.tag}}</p>
      <p>Consola: {{producto.tipo}}</p>
      
      <div class=" my-2">
      <button class=" btn btn-danger boton mx-2" v-if="user.loggedIn" @click="eliminar(producto.id)">Eliminar</button>
      <button class=" btn btn-danger boton mx-2" v-if="user.loggedIn" @click="vender(producto.id)">Vendido</button>
      </div>
      
      
    </div>
    </div>

  </section>
</template>


<script lang="js">
    import{db} from '../db.js'
    import Firebase from 'firebase'
    import $ from "jquery";

  export default  {
    name: 'usuario', 
    props: [],
    
    data () {
      return {
        productos:{},
        
        /* videojuegos */
        /*
        juegosps4:{},
        juegosps5:{},
        juegosxboxo:{},
        juegosxboxx:{},
        juegospc:{},
        juegosswitch:{},
        /* consolas */ 
        /*
        consolaps4:{},
        consolaps5:{},
        consolaxboxo:{},
        consolaxboxx:{},
        consolapc:{},
        consolaswitch:{},
        /* perisfericos */
        /*
        perisfericosps4:{},
        perisfericosps5:{},
        perisfericosxboxo:{},
        perisfericosxboxx:{},
        perisfericospc:{},
        perisfericosswitch:{},
        */
        
        user:{
          loggedIn: false,
          data:{}
        },
        mostrarArticulos:false
        
        
        
      }
    },
    methods: {


       
  
      eliminarcuenta(){
        Firebase.auth().currentUser.delete()
      },
      
      eliminar(id){
          db.collection('productos').doc(id).delete()
        },
      vender(id){
        
        db.collection('productos').doc(id).delete()
      },
      
      mostrar(){
          if(this.mostrarArticulos==false){
              this.mostrarArticulos=true
          
              $.each(this.productos, function(item) {
                if( item.usuario==Firebase.auth().currentUser.email) {
                  this.productosFinal.push(item)
                  }
                })
          }else{
              this.mostrarArticulos=false
          }
      }
      
    },
    mounted: function(){
      Firebase.auth().onAuthStateChanged(user => {
        if (user){
          this.user.loggedIn = true;
          this.user.data = user;
          
          
        }
        else{
          this.user.loggedIn = false;
          this.user.data = {};
          
        }
      })
    },
    computed: {
    
    logueado(){
      return this.user.loggedIn
    },
    productosFinal(){

      return this.productos.filter((producto)=>{
        if(this.user.data.email==producto.usuario){
          return true
        }else{
          return false
        }
      })
    }
    
  },
    firestore:{

      productos:db.collection('productos')
/*
      consolaps4:db.collection('productos').doc('consolas').collection('ps4').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      consolaps5:db.collection('productos').doc('consolas').collection('ps5').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      consolaxboxo:db.collection('productos').doc('consolas').collection('xboxo').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      consolaxboxx:db.collection('productos').doc('consolas').collection('xboxx').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      consolaswitch:db.collection('productos').doc('consolas').collection('switch').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),

      juegosps4:db.collection('productos').doc('videojuegos').collection('ps4').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      juegosps5:db.collection('productos').doc('videojuegos').collection('ps5').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      juegosxboxo:db.collection('productos').doc('videojuegos').collection('xboxo').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      juegosxboxx:db.collection('productos').doc('videojuegos').collection('xboxx').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      juegospc:db.collection('productos').doc('videojuegos').collection('pc').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      juegosswitch:db.collection('productos').doc('videojuegos').collection('switch').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      
      perisfericosps4:db.collection('productos').doc('perisfericos').collection('ps4').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      perisfericosps5:db.collection('productos').doc('perisfericos').collection('ps5').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      perisfericosxboxo:db.collection('productos').doc('perisfericos').collection('xboxo').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      perisfericosxboxx:db.collection('productos').doc('perisfericos').collection('xboxx').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      perisfericospc:db.collection('productos').doc('perisfericos').collection('pc').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:""),
      perisfericosswitch:db.collection('productos').doc('perisfericos').collection('switch').where("usuario", "==", Firebase.auth().currentUser ? Firebase.auth().currentUser.email:"")
   */ }
}
</script>
