<template>
  <div class="home ">
    <div class="container">
      <div class="d-flex flex-column  justify-content-center  text-center">
        <div class=" align-self-center">
        <h1 @click="goToGallery">Galería de imágenes</h1>
        <img @click="goToGallery" alt="Vue logo" src="../assets/galeria.jpg" width="500">
        <nav class="menu">
          <button @click="goToGallery" class="btn btn-primary">Galería</button>
          <button @click="this.$router.push({ name: 'entry', params: { id: 'new' } })" class="btn btn-primary">Nueva imagen</button>
          <button @click="this.$router.push({ name: 'About' })" class="btn btn-primary">About</button>
        </nav>
      </div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  methods: {
    goToGallery() {
      this.$router.push({ name: 'no-entry' })
    }
  }
}
</script>
<style  lang="scss" scoped>
.home {
    background: url("../assets/4931029.jpg") ;
    background-size: cover;
  }
.container > .d-flex{
    height: 100vh;
    overflow: hidden;
}
nav > * {
  margin: 15px;
}
</style>