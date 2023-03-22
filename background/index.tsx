/* eslint-disable*/
import React from "react"
import { createRoot } from 'react-dom/client'
import { BrowserContainer, Lazy, getMenuRoute } from '../src'

createRoot(document.getElementById('root')!).render(
	<BrowserContainer
		menu={[
			getMenuRoute({
				fold: true,
				path: '/',
				modules: [
					'button',
					// 'virtualList',
					'input',
					// 'detail',
					// 'progress',
					'select',
					// 'richText',
					'textarea',
					// 'dialog',
					'table',
					'pagination',
					'layout',
					'card',
					// 'test'
				].map(name => {
					return {
						name,
						path: '/' + name,
						element: Lazy(import(`../src/${name}/demo`))
					}
				}).concat(
					[
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
									name: 'function',
									path: '/form/fc',
									element: Lazy(import('../src/form/demo/FCTest')),
								},
							]
						},
						{
							path: '/menu',
							name: 'menu',
							element: Lazy(import('../src/layout/menu/demo'))
						}
					] as any
				)
			})
		]
		}
	/>
);