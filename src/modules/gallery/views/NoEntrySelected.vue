<template>
    <div class="d-flex justify-content-center">
        <div class="pt-4 text-center">
            <h1>No hay ninguna imagen seleccionada.</h1> 
            <p>Seleccione una imagen del listado o añada una nueva</p>

            <div class="mt-2 d-flex flex-column pt-4">
            <button class="btn btn-success m-4"
                @click="$router.push({ name: 'entry', params: { id: 'new' } })">
                <i class="fa fa-plus-circle"></i>
                Nueva entrada
            </button>
            </div>
        </div>
    </div>

    <Fab 
        @on:click="createNewEntry"
    />
</template>


<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
    },
    methods: {
        createNewEntry() {
            this.$router.push({ name: 'entry', params: { id: 'new' } })
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>