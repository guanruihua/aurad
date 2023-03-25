/* eslint-disable*/
import React from "react"
import { createRoot } from 'react-dom/client'
import { BrowserContainer, Lazy, getMenuRoute } from '../src'
import './index.less'

createRoot(document.getElementById('root')!).render(
	<BrowserContainer
		menu={[
			getMenuRoute({
				// fold: true,
				fold: false,
				path: '/',
				modules: [
					'radio',
					'checkbox',
					'button',
					'input',
					'select',
					'textarea',
					'table',
					'pagination',
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
									name: 'detail',
									path: '/layout/detail',
									element: Lazy(import('../src/layout/detail/demo')),
								},
							]
						}
					] as any
				)
			})
		]
		}
	/>
);