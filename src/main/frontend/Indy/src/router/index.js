import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },

    {
      path: '/home',
      name: 'home',
      component: () =>import('../views/HomeView.vue')
    },
    {
      path: '/bookings',
      name: 'bookings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BookingsView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/principal',
      name: 'principal',
      component: () => import ('../views/PrincipalView.vue')
    },
    {
      path: '/controlpanel',
      name: 'controlpanel',
      component: () => import ('../views/ControlPanelView.vue')
    },
    {
      path: '/adminlogin',
      name: 'admin login',
      component: () => import ('../views/LogInView.vue')
    },
    {
    path: '/bio',
    name: 'bio',
    component: () => import ('../views/BiographyView.vue')
    }
  ]
})

export default router
