import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '@/views/Home';
import Profiles from '@/pages/profiles';
import Profile from '@/pages/profiles/_id.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/profiles',
    name: 'Profiles',
    component: Profiles
  },
  {
    path: '/profiles/:id',
    name: 'Profile',
    component: Profile
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
