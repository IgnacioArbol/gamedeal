<template lang="html">

    <section>
    <div class="m-4 border shadow p-5 mb-5 bg-white rounded mx-auto">   
        <h3>Iniciar Sesion</h3>
        <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6 my-2">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6 my-2">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                    
                  />
                </div>
              </div>

              <div class="form-group row mb-0 my-2">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
              
        </form>
        <div class="d-flex justify-content-center">
            <button class="btn btn-outline-primary mx-5 px-4 mt-4" @click="google"><img style="width:25px" src="../assets/google.png"></button>
            <router-link to="/signup"><div class="mx-5 mt-4"><button class="btn btn-dark">registro</button></div></router-link>
        </div>
      </div>
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
      form: {
        email: "",
        password: ""
        
      },
      user:{
          loggedIn: false,
          data:{}
        },
      
      error: null
    };
    },
    methods: {
      submit() {
     Firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: "home" });
          this.$notify({
            group: 'notificacion',
            title: 'Estas Dentro',
            text: 'Te has logueado correctamente',
            type: 'success'
            });
          console.log(data);
        })
        .catch(err => {
          this.error = err.message;
          this.$notify({
            group: 'notificacion',
            title: 'Vaya',
            text: 'Su email o su contraseña no son correctas',
            type: 'warn'
            });
        })
    },
    google(){
        firebase.google();
        console.log(this.user.data)
        this.$notify({
            group: 'notificacion',
            title: 'Estas Dentro',
            text: 'Te has logueado correctamente con Google',
            type: 'success'
            });
        this.$router.replace({ name: "home" });
    }
  
      
    },
    
    
    
    
      
  
  
}


</script>