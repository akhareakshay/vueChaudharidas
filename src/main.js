import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createWebHistory, createRouter} from 'vue-router'
import blogPostList from './components/blogsList/blogPostList'
import bhajan from './components/bhajansList'

const routes = [{
    path: "/",
    component: blogPostList,
    children: [{
        path: "/bhajan",
        component: bhajan
    }]
}]
const router = createRouter({
    history: createWebHistory(),
    routes
})
const app = createApp(App)
app.use(router)
app.mount('#app')