<template>
    <Navbar />

    <div class="d-flex">
        <div class="col-4">
            <ImageList />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>



<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        ImageList: defineAsyncComponent(() => import('../components/EntryList.vue')),
    },
}
</script>