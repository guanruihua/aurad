import React from "react"
import { createRoot } from 'react-dom/client'
import { BrowserContainer, Lazy, type MenuObject } from '../src'
import './index.less'

import chartRoute from '../src/chart/demo/router'
import formRoute from '../src/form/demo/router'
import dataGraphRoute from '../src/dataGraph/demo/router'
import msgRoute from '../src/message/demo/router'
import layoutRoute from '../src/layout/demo/router'
import codeRoute from '../src/code/demo/router'
import dragRoute from '../src/drag/demo/router'
import { Menu } from "./home"

const modules: MenuObject[] = [
	{
		name: 'Icon',
		path: '/icon',
		element: Lazy(import(`../src/icon/demo`))
	},
	chartRoute,
	formRoute,
	dataGraphRoute,
	msgRoute,
	layoutRoute,
	codeRoute,
	dragRoute,
]

const menu: MenuObject[] = [
	{
		path: '/',
		name: 'home',
		element: <Menu menu={[{
			path: '/',
			name: 'home',
			children: modules,
		}]} />,
		children: modules,
	}
]

function App() {
	return <BrowserContainer
		menu={menu}
	/>
}

createRoot(document.getElementById('root')!).render(<App />);