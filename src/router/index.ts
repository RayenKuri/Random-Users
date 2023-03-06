import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue'
import userDetails from '@/components/user-details.vue'
import useRouteNames from './router-names'

const {RouteName} = useRouteNames()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.USERS,
      component: Users
    },
    {
      path: '/users/:uuid',
      name: RouteName.USERDETAILS,
      component: userDetails
    }
  ]
})

export default router
