<template>
  <div class="home ">

    <h1>Galería de imágenes</h1>
    <img alt="Vue logo" src="../assets/galeria.jpg">

    <button @click="goToGallery" class="btn btn-primary">Galería</button>
    <button @click="goToAbout" class="btn btn-info">About</button>
    <button @click="goToNew" class="btn btn-success">Nueva imagen</button>

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
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    justify-content: center;
    > * {
      max-width: 500px;
    }
    > button {
      display: inline-block;
    }
  }
</style>