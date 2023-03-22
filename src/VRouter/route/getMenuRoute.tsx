import React from 'react'
import { MenuObject } from '../type'
import { Menu } from "./menu"

export interface MenuRouteProps {
	modules: MenuObject[]
	path?: string,
	/**
 * @default true
 */
	fold?: boolean
}

export function getMenuRoute(props: MenuRouteProps): MenuObject {
	const { modules, path = '/', fold = true, ...rest } = props

	const children = modules.map(module => {
		const { name, element, ...mRest } = module
		return {
			name,
			path: path + name,
			element,
			...mRest
		}
	})

	return {
		path,
		element: <Menu fold={fold} menu={children} />,
		children,
		...rest,
	}
}