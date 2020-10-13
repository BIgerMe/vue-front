/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const cookRouter = {
  path: '/cook',
  component: Layout,
  redirect: '/cook/chefs',
  name: 'cook',
  meta: {
    title: 'cook Routes',
    icon: 'nested'
  },
  children: [
    {
      path: 'chefs',
      component: () => import('@/views/cook/chefs/index'), // Parent router-view
      name: 'chefs',
      meta: { title: 'chefs' },
      // redirect: '/cook/chefs',
    },
    {
      path: 'ingredients',
      name: 'ingredients',
      component: () => import('@/views/cook/ingredients/index'),
      meta: { title: 'ingredients' }
    },
    {
      path: 'menus',
      name: 'menus',
      component: () => import('@/views/cook/menus/index'),
      meta: { title: 'menus' }
    }
  ]
}

export default cookRouter
