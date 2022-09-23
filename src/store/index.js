import { createStore } from 'vuex'

import images from '../modules/gallery/store/images'


const store = createStore({
    modules: {
        images
    }
})




export default store