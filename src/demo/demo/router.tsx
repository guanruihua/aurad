import { Lazy } from '@/utils'
import type { MenuObject } from '@/layout'

export default {
  name: 'demo',
  path: '/demo',
  children: [
    {
      name: 'demo5',
      path: '/demo/5',
      element: Lazy(import('./demo5'))
    },
    {
      name: 'demo3',
      path: '/demo/3',
      element: Lazy(import('./demo3'))
    }
  ]
} as MenuObject
