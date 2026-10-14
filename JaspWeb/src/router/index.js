import { createRouter, createWebHistory } from 'vue-router'
import GeneralInfo from '../views/GeneralInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: GeneralInfo },
    { path: '/experiences', component: () => import('../views/ExperiencesTA.vue') },
    { path: '/goals', component: () => import('../views/Goals.vue') },
    { path: '/certifications', component: () => import('../views/Certifications.vue') },
    { path: '/contact', component: () => import('../views/Contact.vue') }
  ]
})

export default router