<template>
  <div class="home ">
    <div class="container">
      <div class="d-flex flex-column  justify-content-center  text-center">
        <div class=" align-self-center">
        <h1>Galería de imágenes</h1>
        <img alt="Vue logo" src="../assets/galeria.jpg" width="500">
        <nav class="menu">
          <button @click="goToGallery" class="btn btn-primary">Galería</button>
          <button @click="goToAbout" class="btn btn-info">About</button>
          <button @click="goToNew" class="btn btn-success">Nueva imagen</button>
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
    },
    goToAbout(){
      this.$router.push({ name: 'About' })
    },
    goToNew(){
      this.$router.push({ name: 'entry', params: { id: 'new' } })
    },
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