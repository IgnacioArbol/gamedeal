<template lang="html">

    <section>
        
        <form action="#" @submit.prevent="submit" class="m-4 border shadow p-5 mb-5 bg-white rounded mx-auto">
          <h3>Registro</h3>
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Nombre</label>

                <div class="col-md-6 my-2">
                  <input
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    value
                    required
                    autofocus
                    v-model="form.name"
                  />
                </div>
              </div>

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
                <label for="password" class="col-md-4 col-form-label text-md-right">Contraseña</label>

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

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Repetir contraseña</label>

                <div class="col-md-6 my-2">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.passwordrep"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4 my-2">
                  <button type="submit" class="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
            
    <p>Si quieres volver pulsa volver</p>
    <router-link to="/login"><div><button class="btn btn-dark">volver</button></div></router-link>

    </section>

</template>

<script lang="js">
  
  
  import Firebase from "firebase"
  
  
  export default  {
    name: 'cabecera',
    props: [],
    
    data () {
      return {
          form: {
        name: "",
        email: "",
        password: "",
        passwordrep:""
      },
      error: null  
      }
    },
    methods: {
      submit() {
      
      Firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          console.log(data)
          this.$notify({
            group: 'notificacion',
            title: 'Bienvenido a la familia',
            text: 'Te acabas de registrar',
            type: 'success'
            });
          this.$router.replace({ name: "home" });
          data.user
            .updateProfile({
              ventas:0,
              displayName: this.form.name,
              photoURL: "https://lh3.googleusercontent.com/proxy/1O49LYqPW3QPlkfI7a_3jS71cRthGP1GQbYK25S80n8t2wEBHIkwvbrsjrukwqZveht8rQX33HfR8PVMsKfkDZJ7dSUzGXmKcs18pwfId5213BmhYGQj"
            })
            
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
          this.$notify({
            group: 'notificacion',
            title: 'Ha ocurrido un error',
            type: 'warn'
            });
        });
      
    }
    
    }
    
    
      
  
  

}

</script>
