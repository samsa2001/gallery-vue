<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white pointer"
            @click="$router.push({ name: 'Home'})">
            <img src="@/assets/favicon.png" 
                 alt="Galeria de imagenes"
                 height="24"
                 class="d-inline-block align-text-top mx-2">

            Galería de imágenes
        </a>


        <div class="d-flex">
            <button class="btn btn-outline-info mx-2"
                @click="$router.push({ name: 'About'})">
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>