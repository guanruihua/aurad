import React from 'react'
import { Icon, Lazy, type MenuObject } from '../src'
import chartRoute from '../src/chart/demo/router'
import formRoute from '../src/form/demo/router'
import dataGraphRoute from '../src/dataGraph/demo/router'
import msgRoute from '../src/message/demo/router'
import layoutRoute from '../src/layout/demo/router'
import animationRoute from '../src/animation/demo/router'
// import dragRoute from '../src/drag/demo/router'
import feedbackRoute from '../src/feedback/demo/router'
import DemoRoute from '../src/demo/demo/router'

export const modules: MenuObject[] = [
  {
    name: 'Icon',
    path: '/icon',
    icon: <Icon size={24} type='icon' />,
    element: Lazy(import(`../src/icon/demo`)),
  },
  chartRoute,
  formRoute,
  dataGraphRoute,
  msgRoute,
  layoutRoute,
  animationRoute,
  // dragRoute,
  feedbackRoute,
  DemoRoute,
]
