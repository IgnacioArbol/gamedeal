<template lang="html">

  <section class="pie">
    <div class="container-fluid pb-0 mb-0 justify-content-center text-light border-top">
     <footer>
         <div class="row my-5 justify-content-center py-5" style="color:white;">
             <div class="col-11">
                 <div class="row ">
                     <div class="col-xl-4 col-md-4 col-sm-4 col-12 my-auto ">
                         <img src="../assets/logo.png" style="max-width:150px;">
                         <h3 class="text-muted mb-md-0 mb-5 bold-text">GameDeal</h3>
                     </div>
                     <div class="col-xl-4 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 bold-text "><b>Menú</b></h6>
                         <ul class="list-unstyled">
                             <li>Sobre mí</li>
                             <li>Quienes somos</li>
                             <li>Blog</li>
                             <li>Portfolio</li>
                         </ul>
                     </div>
                     <div class="col-xl-4 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>Localización</b></h6>
                         <p class="mb-1">Proyecto realizado desde Rumanía</p>
                     </div>
                 </div>
                 <div class="row d-flex justify-content-center">
                     <div class="col-xl-4 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                         <p class="social text-muted mb-0 pb-0 bold-text"> <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span> <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span> </p><small class="rights"><span>&#174;</span>Todos los derechos reservados a Ignacio Árbol Gomez</small>
                     </div>
                     <div class="col-xl-4 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                         <h6 class="mt-55 mt-2 text-muted bold-text"><b>Desarrollo de aplicaciones web</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span>I.E.S Francisco Ayala</small>
                     </div>
                     <div class="col-xl-4 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                         <h6 class="text-muted bold-text"><b>IGNACIO ÁRBOL GOMEZ</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> IgnacioArbol@gmail.com</small>
                     </div>
                 </div>
             </div>
         </div>
     </footer>
 </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'pie',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style lang="css">
  .pie {
    margin-top: 30px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    background-color: #8ebe8e;
  }


</style>
