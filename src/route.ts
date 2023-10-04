import { createRouter, createWebHashHistory } from 'vue-router'

import Articles from "./components/Articles.vue"
import Words from "./components/Words.vue"

const routes = [
    {
        path: '/Articles', component: Articles
    },
    {
        path: '/Words', component: Words
    },
    {
        path: '/', component: Articles
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})