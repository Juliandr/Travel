import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/home/Home.vue'
import CityView from '@/pages/city/City'
import DetailView from '@/pages/detail/Detail'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/city',
    name: 'CityView',
    component: CityView
  },
  {
    path: '/detail/:id',
    name: 'DetailView',
    component: DetailView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HomeView',
//       component: HomeView
//     },
    // {
    //   path: '/city',
    //   name: 'City',
    //   component: City
    // },
    // {
    //   path: '/detail/:id',
    //   name: 'Detail',
    //   component: Detail
    // }
  // ],
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
// })
