import { Lazy } from '@/utils'
import type { MenuObject } from '@/layout'

export default {
  name: 'form',
  path: '/form',
  children: [
    {
      index: true,
      element: Lazy(import('.')),
    },
    {
      name: 'button',
      path: '/form/button',
      element: Lazy(import('../modules/button/demo')),
    },
    {
      name: 'input',
      path: '/form/input',
      children: [
        {
          name: 'text',
          path: '/form/input/text',
          element: Lazy(import('../modules/input/text/demo')),
        },
        {
          name: 'number',
          path: '/form/input/number',
          element: Lazy(import(`../modules/input/number/demo`)),
        },
        {
          name: 'textarea',
          path: '/form/input/textarea',
          element: Lazy(import(`../modules/input/textarea/demo`)),
        },
      ],
    },
    {
      name: 'select',
      path: '/form/select',
      element: Lazy(import('../modules/select/demo')),
    },
    {
      name: 'checkbox',
      path: '/form/checkbox',
      element: Lazy(import(`../modules/checkbox/demo`)),
    },
    {
      name: 'radio',
      path: '/form/radio',
      element: Lazy(import('../modules/radio/demo')),
    },
  ],
} as MenuObject
