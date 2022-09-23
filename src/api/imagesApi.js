import axios from 'axios'


const imagesApi = axios.create({
    baseURL: 'https://vue-demos-rpm-default-rtdb.europe-west1.firebasedatabase.app'
})


export default imagesApi
