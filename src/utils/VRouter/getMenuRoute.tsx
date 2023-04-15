import React from 'react'
import { Menu, type MenuObject } from "@/layout"
import { ObjectType } from 'abandonjs'

export interface MenuRouteProps {
	modules: MenuObject[]
	group?: ObjectType<string[]>
	path?: string,
	/**
 * @default true
 */
	fold?: boolean
}

export function getMenuRoute(props: MenuRouteProps): MenuObject {
	const { modules, group, path = '/', fold = true, ...rest } = props

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
		element: <Menu fold={fold} menu={children} group={group} />,
		children,
		...rest,
	}
}