

export default {

    name: 'gallery',
    component: () => import(/* webpackChunkName: "images" */ '@/modules/gallery/layouts/imagesLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "images-no-entry" */ '@/modules/gallery/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "images-no-entry" */ '@/modules/gallery/views/EntryView.vue'),
            props: ( route ) => {
                return { 
                    id: route.params.id
                }
            }
        }
    ]

}