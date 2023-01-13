import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'siswa.index',
        component: () => import ('@/views/siswa/SiswaIndex.vue')
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router