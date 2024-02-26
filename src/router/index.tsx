import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Catalog from '../pages/Catalog.vue'
import Contact from '../pages/Contact.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import MovieDetails from '../pages/MovieDetails.vue'
import UserProfile from '../pages/userProfile.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'catálogo',
      component: Catalog
    },
    {
      path: '/about',
      name: 'sobre',
      component: About
    },
    {
      path: '/contact',
      name: 'contato',
      component: Contact
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  {
    path: '/register',
    name: 'cadastro',
    component: Register
  },
  {
    path: '/userProfile/:id',
    name: 'Perfil do usuário',
    component: UserProfile
  },
  {
    path: '/movie/:id',
    name: 'Detalhes do filme',
    component: MovieDetails
  },
    
  ]
})

export default router
