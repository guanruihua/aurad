/* eslint-disable*/
import React from "react"
import { createRoot } from 'react-dom/client'
import { BrowserContainer, Lazy, getMenuRoute } from '../src'
import './index.less'
import { MenuObject } from "../src/layout/type"

const modules = [
	'step',
	'icon',
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
		name: 'flow',
		path: '/flow',
		children: [
			{
				name: 'fix',
				path: '/flow/fix',
				element: Lazy(import('../src/flow/demo/fix')),
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
			{
				name: 'input',
				path: '/form/input',
				children: [
					{
						name: 'base',
						path: '/form/input/base',
						element: Lazy(import('../src/form/modules/input/demo'))
					},
					{
						name: 'Object',
						path: '/form/input/object',
						element: Lazy(import('../src/form/modules/input/demo/object'))
					},
					{
						name: 'FC',
						path: '/form/input/fc',
						element: Lazy(import('../src/form/modules/input/demo/fc'))
					},
					{
						name: 'class',
						path: '/form/input/class',
						element: Lazy(import('../src/form/modules/input/demo/class'))
					}
				]
			},
			{
				name: 'select',
				path: '/form/select',
				children: [
					{
						name: 'simple',
						path: '/form/select/simple',
						element: Lazy(import('../src/form/modules/select/demo/simple')),
					},
					{
						name: 'multiple',
						path: '/form/select/multiple',
						element: Lazy(import('../src/form/modules/select/demo/mult')),
					},
					{
						name: 'form',
						path: '/form/select/form',
						element: Lazy(import('../src/form/modules/select/demo/form')),
					},
				],
			},
			{
				name: 'inputNumber',
				path: '/form/inputNumber',
				element: Lazy(import(`../src/form/modules/inputNumber/demo`))
			},
			{
				name: 'textarea',
				path: '/form/textarea',
				element: Lazy(import(`../src/form/modules/textarea/demo`))
			},
			{
				name: 'checkbox',
				path: '/form/checkbox',
				element: Lazy(import(`../src/form/modules/checkbox/demo`))
			},
			{
				name: 'radio',
				path: '/form/radio',
				children: [
					{
						name: 'base',
						path: '/form/radio/base',
						element: Lazy(import('../src/form/modules/radio/demo'))
					},
					{
						name: 'FC',
						path: '/form/radio/fc',
						element: Lazy(import('../src/form/modules/radio/demo/fc'))
					},
					{
						name: 'class',
						path: '/form/radio/class',
						element: Lazy(import('../src/form/modules/radio/demo/class'))
					}
				]
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
		group: {
			Form: [
				'form'
			],
			Chart: [
				'flow'
			],
		},
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