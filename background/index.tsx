import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.less'
import { BrowserContainer, type MenuObject } from '../src'
import { Menu } from './home'
import { modules } from './router'

const menu: MenuObject[] = [
  {
    path: '/',
    name: 'home',
    element: (
      <Menu
        menu={[
          {
            path: '/',
            name: 'home',
            children: modules,
          },
        ]}
      />
    ),
    children: modules,
  },
]

function App() {
  return <BrowserContainer menu={menu} />
}

createRoot(document.getElementById('root')!).render(<App />)
