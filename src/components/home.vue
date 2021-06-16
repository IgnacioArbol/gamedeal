<template>
     
 
 <section class="home">
   <div id="navbar">

      <div id="abajo" class="m-4 p-3 border shadow p-3 mb-5 bg-white rounded mx-auto" style="display:flex; justify-content:center; flex-direction:column; max-width: 1000px; min-height: 350px; font-family: 'Ubuntu', sans-serif; font-weight: 400; ">
        <div class="row">
          <div class="col-12">
            <label>¿Qué andas buscando?</label>
            <input class=" form-control input" v-on:keydown.enter="filtrar" v-model="filtro">
          </div>
          <div class="col-12 col-sm-6 my-3">
            <label >Categoría</label>
            <select  class="form-control input" v-model="tag" v-on:keydown.enter="filtrar">
            <option selected value="">Elige una opción</option>
            <option>Consolas</option>
            <option>Videojuegos</option>
            <option>Periféricos</option>
            </select>
          </div>
          <br>
          <div class="col-12 col-sm-6 my-3">
          <label>Consolas</label>
          <select class="form-control input" v-model="tipo" v-on:keydown.enter="filtrar">
            <option selected value="">¿De que plataforma?</option>
            <option>PC</option>
            <option>PS4</option>
            <option>PS5</option>
            <option>XboxONE</option>
            <option>Xbox X</option>
            <option>Switch</option>
          </select>
          </div>
          <div class="my-4">
            <label>Orden</label>
            <select class="form-control input" v-model="busqueda" v-on:keydown.enter="filtrar" >
              <option selected>Precio mayor</option>
              <option>Precio menor</option>
            </select>
          </div>
          <div class="mt-3" style="align-items:center;">
            <button class="btn btn-info" style="max-width:100px;" @click="filtrar()">Buscar</button>
          </div>
        </div>
      </div> 
    </div>

    <h1 class="titulo mt-5 mb-3">Productos</h1>
    
    <div class="contenedor d-flex flex-column flex-wrap justify-content-around ml-5 mr-5 "  >

    
    <div class="row">
    <div class="producto border shadow p-3 mb-5 bg-white rounded px-2 my-3 mx-2 mx-auto" style="max-width: 650px; font-family: 'Ubuntu', sans-serif; font-weight: 500;" v-for="(producto,index) in listaProductosFiltrada" v-bind:key="producto.id">
      <div v-on:click="ampliar(producto.id,producto.mg,index)">
      <div class="row">
      <div class="col-12 col-sm-6 ml-3 container"  >
      <img class="imagen rounded img-top my-2" style="width:250px; height:250px; object-fit: contain; border" v-bind:src="producto.foto">
      </div>
      <div class="col-12 col-sm-6 ">
      <h2 class="nombre mt-3">{{producto.nombre}}</h2>
      <p>{{producto.descripcion}}</p>
      <h3 class="precio">{{producto.precio}}€</h3>
      <div>
        {{producto.estado}}
      </div>
      
      <p style="margin-top:30px;">Subido por: {{producto.usuario}}</p>
      
      </div>
      </div>
      </div>
      
    </div>
    </div>
    </div>
    
  </section>
</template>


<script lang="js">
import{db} from '../db.js'
import Firebase from 'firebase'
/*import $ from "jquery";

/* voy a exportar el producto que quiero que se amplie  */
 export {productoAmpliado}
 var productoAmpliado="default"
 

  export default  {
    name: 'home', 
    props: [],
    
    data () {
      return {
        productosFinal:[],
        productos:[],
        
       filtro:"",
        busqueda:"",
        tag:"",
        tipo:"",
        user:{
          loggedIn: false,
          data:{}
        },
        
        
        
      }
    },
    methods: {
      
      

       
      
      ampliar(id,megustas,index){
        console.log("le estas dando")
        console.log(id)
        console.log(this.productos[index])
        console.log(megustas)
        
        
        this.productos[index].mg=megustas+1
          
      },
      filtrar(){
        if(this.busqueda=="Precio mayor"){
        this.productos.sort((a, b) => a.precio < b.precio && 1 || -1)
      }else{
        this.productos.sort((a, b) => a.precio > b.precio && 1 || -1)
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
    listaProductosFiltrada: function(){
      
      if(this.filtro==''){    //no hay filtro
      if(this.tag=='' && this.tipo==''){    //ni filtro ni tag ni tipo
        return this.productos
      }else if(this.tipo==''){              //ni filtro ni tipo
        return this.productos.filter((producto)=>{
          if(producto.tag==this.tag){
            return true
          }else{
            return false
          }
        })
      }else if(this.tag==''){                 //ni filtro ni tag
        return this.productos.filter((producto)=>{
          if(producto.tipo==this.tipo){
            return true
          }else{
            return false
          }
        })
      }else{
        return this.productos.filter((producto)=>{
          if(producto.tipo==this.tipo && producto.tag==this.tag){
            return true
          }else{
            return false
          }
        })
      }
      }
      
      return this.productos.filter((producto)=>{
        if(producto.nombre.indexOf(this.filtro)>=0)
        return true;
        else{
          return false;
        }
      })
    }
    
    
  },
    firestore:{
      productos:db.collection('productos').orderBy("precio","desc")
      
    }
}
</script>

<style lang="css">

.input{
  text-align: center;
}
.nombre{
  font-family: 'Staatliches', cursive;
}
</style>

 

