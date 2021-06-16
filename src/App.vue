<template>
  <div id="app">
    <notifications group="notificacion" />
    <cabecera></cabecera>
    
    <router-view/>
    <pie></pie>
  </div>
</template>

<script>
import cabecera from './components/cabecera.vue'
import pie from './components/footer.vue'

export default {
  name: 'App',
  components: {
    cabecera,
    pie
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Arvo', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(137, 202, 99, 0.356);
}

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Sen&family=Staatliches&family=Ubuntu:wght@300;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arvo&family=Staatliches&display=swap');
</style>
