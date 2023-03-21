import React, { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

interface _MenuObject extends Record<string, any> {
	name?: string
}

export type MenuObject = RouteObject & _MenuObject

const list = [
	'button',
	// 'virtualList',
	'input',
	// 'detail',
	// 'progress',
	'select',
	// 'richText',
	'textarea',
	// 'dialog',
	'form',
	'table',
	'pagination',
	'layout',
	'card',
	'test'
].map(name => {
	return {
		name,
		path: '/' + name,
		element: <Suspense fallback={<div>Loading</div>}>

			{/* {React.createElement(lazy(() => import(`../src/${name}/__test__`)))} */}
			{React.createElement(lazy(() =>
				import(name === 'test' ? `../src/${name}` : `../src/${name}/demo`))
			)}
		</Suspense>
	}
})

export const menu: MenuObject[] = [
	{
		path: '/',
		element: <div />
	},
].concat(list)

export const routers: RouteObject[] = Array.from(menu, (item: MenuObject) => ({ path: item.path, element: item.element }))

