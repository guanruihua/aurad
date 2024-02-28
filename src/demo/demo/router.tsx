import React from 'react'
import { Lazy } from '@/utils'
import type { MenuObject } from '@/layout'
import { Icon } from '@/icon'

export default {
  name: 'demo',
  path: '/demo',
  // icon: <Icon type='drag' size={24} />,
  children: [
    {
      name: 'demo4',
      path: '/demo/4',
      element: Lazy(import('./demo4')),
    },
    {
      name: 'demo3',
      path: '/demo/3',
      element: Lazy(import('./demo3')),
    },
    {
      name: 'demo2',
      path: '/demo/2',
      element: Lazy(import('./demo2')),
    },
    {
      name: 'demo1',
      path: '/demo/1',
      element: Lazy(import('./demo1')),
    },
  ],
} as MenuObject
