<template>
     
 
 <section>
    <h1 class="titulo mt-5 mb-3">Añadir</h1>
    
    
    <div class="nuevoproducto container">
      <div class="row">
        <div class="col-12 col-sm-6 d-flex flex-column my-auto">
          <label >¿Comó quieres que se llame?</label>
          <input class="form-control" type="text" v-model="nombre">
        </div>
        <div class="col-12 col-sm-6 d-flex flex-column my-auto">
          <label>¿Cuál es su descripción?</label>
          <input class="form-control" type="text" v-model="estado">
        </div>
        <br>
        <div class="row">

          <div class="col-12 col-sm-6">
              <label class="mt-4">¿Cuál es su imagen?</label>
              <input class="form-control" type="file" @change="onFileSelected" >
              <progress class="mt-5" :value="uploadValue" max="100" id="uploader">0%</progress>
              <button class="btn btn-info" @click="subirfoto()">subir foto</button>
              <br>
              <label class="mt-4">Precio</label>
              <input class="form-control" type="number" v-model.number="precio" value="0" min="0">
          </div>
          <div class="my-3 col-12 col-sm-6">
            <img style="width: 300px;" :src="this.picture">
          </div>
        </div>
        <br>
          <div class="form-group row ">
            <div class="col-sm-6 col-12">
              <label >Categoría</label>
              <select  class="form-control" v-model="tag" required>
              <option selected value="">Choose...</option>
              <option>Consolas</option>
              <option>Videojuegos</option>
              <option>Periféricos</option>
              </select>
            </div>
            <div class="col-sm-6 col-12">
              <label>Plataforma</label>
              <select class="form-control col-sm-6 col-12" required v-model="tipo">
                <option selected value="">De que plataforma?</option>
                <option>PC</option>
                <option>PS4</option>
                <option>PS5</option>
                <option>XboxONE</option>
                <option>Xbox X</option>
                <option>Switch</option>
              </select>
            </div>
        </div>
    </div>
        <br>
        
        <button class="btn btn-primary" type="submit" @click="añadirnuevo()"> Subir Producto</button>
    </div>
    
  </section>
</template>


<script lang="js">
    import{db} from '../db.js'
    import Firebase from 'firebase'

  export default  {
    name: 'usuario', 
    props: [],
    
    data () {
      return {
        productos:{},
        user:{
          loggedIn: false,
          data:{}
        },
        selectedFile: null,
        uploadValue:0,
        picture:null,

        nombre:"",
        precio:0,
        estado:"",
        imagen:"",
        tag:"",
        tipo:""
        
      }
    },
    methods: {
      
      onFileSelected(event){
        this.selectedFile = event.target.files[0];
        
      },
      subirfoto(){
        /*  subir imagen    */
        const storageRef= Firebase.storage().ref(`/${this.selectedFile.name}`)
            const task = storageRef.put(this.selectedFile)
            task.on('state_changed',snapshot=>{
              let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
              this.uploadValue = percentage;
            },error=>{console.log(error.message)},
              ()=>{
                this.uploadValue=100;
                task.snapshot.ref.getDownloadURL().then((url)=>{
                  this.picture = url;
                  console.log(url)
                })
              
            })
      },
      añadirnuevo(){
        db.collection('productos').add({
          nombre:this.nombre.toLowerCase(),
          estado:this.estado,
          foto:this.picture,
          precio:this.precio,
          usuario:this.user.data.email,
          tag:this.tag,
          tipo:this.tipo,
          
        })
          
            this.$router.replace({ name: "home" });
            
        
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
    }
    
  },
    firestore:{
      productos:db.collection('productos')
      
    }
}
  
</script>
