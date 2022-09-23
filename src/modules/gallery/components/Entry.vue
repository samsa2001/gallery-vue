<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: entry.id }})"
  >
    <div class="row">
      <!-- Titilo -->
      <div class="entry-image col-lg-3">
            <img 
                v-if="entry.picture"
                :src="entry.picture" 
                alt="entry-picture"
                class="img-thumbnail">
      </div>

      <div class="entry-description col">
          {{ shortText }}
      </div>
      </div>
  </div>
</template>

<script>


export default {
    props: {
        entry: {
            type: Object,
            required: true
        }
    },
    computed: {
        shortText() {
            return ( this.entry.text.length > 130 )
                ? this.entry.text.substring(0,130) + '...'
                : this.entry.text
        }
    }
}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}

</style>