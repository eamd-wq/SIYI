import Vue from 'vue'
import VueRouter from 'vue-router'
import Bar from '../views/bar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Bar',
    component: Bar
  },
  {
    path: '/Line',
    name: 'Line',
    component: () => import("../views/line")
  },
  {
    path: '/Pie',
    name: 'Pie',
    component: () => import("../views/pie")
  },
  {
    path: '/Scatter',
    name: 'Scatter',
    component: () => import("../views/scatter")
  },
  {
    path: '/Effect',
    name: 'Effect',
    component: () => import("../views/effect")
  },
  {
    path: '/Radar',
    name: 'Radar',
    component: () => import("../views/radar")
  },
  {
    path: '/Funnel',
    name: 'Funnel',
    component: () => import("../views/funnel")
  },
  {
    path: '/Gauge',
    name: 'Gauge',
    component: () => import("../views/gauge")
  },
  {
    path: '/Cloud',
    name: 'Cloud',
    component: () => import("../views/cloud")
  },
  {
    path: '/Map',
    name: 'Map',
    component: () => import("../views/map")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
