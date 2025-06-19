// import React from 'react'
import { Lazy, type MenuObject } from '../src'
import formRoute from '../src/form/demo/router'
import dataGraphRoute from '../src/dataGraph/demo/router'
import msgRoute from '../src/message/demo/router'
import layoutRoute from '../src/layout/demo/router'
// import dragRoute from '../src/drag/demo/router'
import feedbackRoute from '../src/feedback/demo/router'

export const modules: MenuObject[] = [
  {
    name: 'Icon',
    path: '/icon',
    element: Lazy(import(`../src/icon/demo`)),
  },
  formRoute,
  {
    name: 'element',
    path: '/element',
    element: Lazy(import('../src/element/demo'))
  },
  dataGraphRoute,
  msgRoute,
  layoutRoute,
  // dragRoute,
  feedbackRoute,
]
