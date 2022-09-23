<template>

    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">


                <button class="btn btn-primary"
                    @click="onSelectImage">
                    <span 
                        v-if="entry.picture">
                        Cambiar foto
                    </span>
                    <span 
                        v-else>
                        Subir foto
                    </span>
                    <i class="fa fa-upload"></i>
                </button>
                <input type="file"
                    @change="onSelectedImage"
                    ref="imageSelector"
                    v-show="false"
                    accept="image/png, image/jpeg"
                >
                <button 
                    v-if="entry.id"
                    class="btn btn-danger mx-2"
                    @click="onDeleteEntry">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
        </div>

        <hr>
        <img 
            v-if="entry.picture && !localImage"
            :src="entry.picture" 
            alt="entry-picture"
            class="entry-picture">

        <img 
            v-if="localImage"
            :src="localImage" 
            alt="entry-picture"
            class="entry-picture">
        <textarea
            v-model="entry.text"
            placeholder="Descripción de la imagen"
        ></textarea>



    </template>

    <Fab 
        icon="fa-save"
        @on:click="saveEntry"
    />

</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex' // computed!!!
import Swal from 'sweetalert2'

import uploadImage from '../helpers/uploadImage'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    },

    data() {
        return {
            entry: null,
            localImage: null,
            file: null
        }
    },
    computed: {
        ...mapGetters('images', ['getEntryById'])
    },

    methods: {
        ...mapActions('images', ['updateEntry','createEntry','deleteEntry']),
        loadEntry() {
            
            let entry;

            if ( this.id === 'new' ) {
                entry = {
                    text: '',
                    date: new Date().getTime()
                }
            } else {
                entry = this.getEntryById( this.id )
                if ( !entry ) return this.$router.push({ name: 'no-entry' })
            }
            this.entry = entry
        },
        async saveEntry() {

            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            Swal.showLoading()

            const picture = await uploadImage( this.file )
            
            this.entry.picture = picture
            
            if ( this.entry.id  ) {
                // Actualizar
                await this.updateEntry( this.entry )
            } else {
                // Crear una nueva entrada
                const id = await this.createEntry( this.entry )
                this.$router.push({ name: 'entry', params: { id } })
            }

            this.file = null
            this.localImage = null
            Swal.fire('Guardado', 'Imagen guardada con éxito', 'success')
            

        },
        async onDeleteEntry() {            
            
            const { isConfirmed } = await Swal.fire({
                title: '¿Está seguro?',
                text: 'Una vez borrada la imagen, no se puede recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si, estoy seguro'
            })

            if ( isConfirmed ) {
                new Swal({
                    title: 'Espere por favor',
                    allowOutsideClick: false
                })
                Swal.showLoading()
                await this.deleteEntry( this.entry.id )
                this.$router.push({ name: 'no-entry' })

                Swal.fire('Eliminada','','success')
            }
        },

        onSelectedImage( event ) {
            const file = event.target.files[0]
            if ( !file ) {
                this.localImage = null
                this.file = null
                return
            }

            this.file = file

            const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL( file )

        },
        onSelectImage() {
            this.$refs.imageSelector.click()
        },
    },

    created() {
        // console.log(this.$route.params.id)
        this.loadEntry()
    },

    watch: {
        id() {
            this.loadEntry()
        }
    }



}
</script>

<style lang="scss" scoped>

textarea {
    font-size: 20px;
    width: 80%;
    display: block;
    margin: 32px auto;
    padding: 0 15px;

    &:focus {
        outline: none;
    }
}

.entry-picture {
    display:block;
    margin: 10px auto;
    max-width: 80%;
    max-height: 80vh;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}

</style>