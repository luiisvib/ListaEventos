import { createRouter, createWebHistory } from 'vue-router'
import EventosDisponiblesView from '../views/EventosDisponiblesView.vue'
import PortadaView from '../views/PortadaView.vue'
import LoginView from '../views/LoginView.vue'
import MisEventosView from "../views/MisEventosView.vue"

const routes = [
  {
    path: '/',
    name: 'PortadaView',
    component: PortadaView
  },
  {
    path: '/EventosDisponibles',
    name: 'EventosDisponiblesView',
    component: EventosDisponiblesView
  },
  {
    path: '/Login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/MisEventos',
    name: 'MisEventosView',
    component: MisEventosView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
