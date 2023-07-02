import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createWebHistory, createRouter} from 'vue-router'
import blogPostList from './components/blogsList/blogPostList'
import bhajan from './components/bhajansList'
import contactUs from './components/contactUs'
import LoginPage from './components/admin/LoginPage'
import saveBlog from './components/admin/saveBlog'
import '@fortawesome/fontawesome-free/css/all.min.css';

import cors from 'cors'

const routes = [{
    path: "/",
    component: blogPostList,
    children: [
            {
            path: "/bhajan",
            component: bhajan
        },
        {
            path: "/contact",
            component: contactUs
        },
        {
            path: "/saveBlog",
            component: saveBlog
        },
    ]
},
{
    path: '/admin',
    component: LoginPage,
}]
const router = createRouter({
    history: createWebHistory(),
    routes
})
const app = createApp(App)
app.use(router)
app.use(cors)
app.mount('#app')