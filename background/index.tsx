import React from "react"
import { createRoot } from 'react-dom/client'
import { BrowserContainer, Icon, Lazy, type MenuObject } from '../src'
import './index.less'

import chartRoute from '../src/chart/demo/router'
import formRoute from '../src/form/demo/router'
import dataGraphRoute from '../src/dataGraph/demo/router'
import msgRoute from '../src/message/demo/router'
import layoutRoute from '../src/layout/demo/router'
import codeRoute from '../src/code/demo/router'
import dragRoute from '../src/drag/demo/router'
import feedbackRoute from '../src/feedback/demo/router'
import effectRoute from '../src/effects/demo/router'
import { Menu } from "./home"

const modules: MenuObject[] = [
	{
		name: 'Icon',
		path: '/icon',
		icon: <Icon size={24} type="icon" />,
		element: Lazy(import(`../src/icon/demo`))
	},
	chartRoute,
	formRoute,
	dataGraphRoute,
	msgRoute,
	layoutRoute,
	codeRoute,
	dragRoute,
	feedbackRoute,
	effectRoute,
]

const menu: MenuObject[] = [
	{
		path: '/',
		name: 'home',
		element: <Menu
			fold={localStorage.fold === 'true'}
			menu={[{
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