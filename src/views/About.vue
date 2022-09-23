<template>
  <div class="row">
    <aside class="col-lg-4 text-center order-1 order-lg-0">      
      <div class="d-flex flex-column  justify-content-center  text-center">
        <div class=" align-self-center">
        <h1>Galería de imágenes</h1>
        <img alt="Vue logo" src="../assets/galeria.jpg" width="500">
        <button @click="this.$router.push({ name: 'no-entry' })" class="btn btn-success">Volver a la Galería</button>
      </div>
      </div>
    </aside>
    <div class=" content col-lg-8 order-0 order-lg-1">
      <h1 class="text-center mb-4">App Galería Básica creada por Ramón Pons</h1>
      <p class="pt-4">Puede descargar el código de la App en <a href="https://github.com/samsa2001/gallery-vue" target="_blank">https://github.com/samsa2001/gallery-vue</a></p>
      <p class="mb-4">Puede ver la App en funcionamiento en <a href="https://galeria.mitziweb.com" target="_blank">https://galeria.mitziweb.com</a></p>
      <h2 class="text-center py-4">Sobre mí</h2>
      <iframe src="https://mitziweb.com/cv-2022.pdf" width="100%" height="1000px" class="mt-4"></iframe>
      </div>
  </div>
</template>


<style  lang="scss" scoped>
  aside {
    background: url("../assets/4931029.jpg") ;
    background-size: cover;
    height: 100vh;
    border-right: 1px solid black;
    > .d-flex{
      height: 100vh;
      overflow: hidden;
      }
  }
  .content {
    height: 100vh;
    padding:10vh;
    overflow-y: auto;

  }
</style>
