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
      name: 'demo6',
      path: '/demo/6',
      element: Lazy(import('./demo6'))
    },
  ]
} as MenuObject
