import React from "react"
import { createRoot } from 'react-dom/client'
import { BrowserContainer, Lazy, getMenuRoute, type MenuObject } from '../src'
import './index.less'

import chartRoute from '../src/chart/demo/router'
import formRoute from '../src/form/demo/router'
import dataGraphRoute from '../src/form/demo/router'
import msgRoute from '../src/form/demo/router'
import layoutRoute from '../src/layout/demo/router'

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
]

const menu = [
	getMenuRoute({
		fold: false,
		group: {
			Form: ['form'],
			Layout: ['layout'],
			Chart: ['flow'],
		},
		path: '/',
		modules,
	})
]
function App() {
	return <BrowserContainer
		menu={menu}
	/>
}

createRoot(document.getElementById('root')!).render(<App />);