/* eslint-disable*/
import React from "react"
import { createRoot } from 'react-dom/client'
import { BrowserContainer, Lazy, getMenuRoute } from '../src'
import './index.less'
import { MenuObject } from "../src/layout/type"

const modules = [
	'flow',
	'step',
	'icon',
	'radio',
	'checkbox',
	'button',
	'input',
	'inputNumber',
	'textarea',
	'table',
	'paging',
	'echart'
].map(name => {
	return {
		name,
		path: '/' + name,
		element: Lazy(import(`../src/${name}/demo`))
	}
})

const reModules: MenuObject[] = [
	{
		name: 'select',
		path: '/select',
		children: [
			{
				name: 'simple',
				path: '/select/simple',
				element: Lazy(import('../src/select/demo/simple')),
			},
			{
				name: 'multiple',
				path: '/select/multiple',
				element: Lazy(import('../src/select/demo/mult')),
			},
			{
				name: 'form',
				path: '/select/form',
				element: Lazy(import('../src/select/demo/form')),
			},
		],
	},
	{
		name: 'form',
		path: '/form',
		children: [
			{
				name: 'class',
				path: '/form/class',
				element: Lazy(import('../src/form/demo/classTest')),
			},
			{
				name: 'fc',
				path: '/form/fc',
				element: Lazy(import('../src/form/demo/FCTest')),
			},
		],
	},
	{
		name: 'msg',
		path: '/msg',
		children: [
			{
				name: 'dialog',
				path: '/msg/dialog',
				element: Lazy(import('../src/message/dialog/demo')),
			},
		],
	},
	{
		name: 'Layout',
		path: '/layout',
		children: [
			{
				name: 'card',
				path: '/layout/card',
				element: Lazy(import('../src/layout/card/demo')),
			},
			{
				name: 'space',
				path: '/layout/space',
				element: Lazy(import('../src/layout/space/demo')),
			},

		]
	}
]

const menu = [
	getMenuRoute({
		fold: false,
		path: '/',
		modules: [...modules, ...reModules],
	})
]
function App() {
	return <BrowserContainer
		menu={menu}
	/>
}

createRoot(document.getElementById('root')!).render(<App />);