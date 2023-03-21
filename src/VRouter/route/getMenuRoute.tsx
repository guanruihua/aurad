import React, { lazy, Suspense, ComponentType } from 'react'
import { MenuObject } from '../type'
import { Menu } from "./menu"

export interface TestMenuRouteProps {
	modules: { name: string, element: React.ReactNode }[]
	path?: string,
	/**
 * @default true
 */
	fold?: boolean
}

export function lazyLoad(element: Promise<{ default: ComponentType<any> }>, Loading = <div>Loading</div>): React.ReactNode {
	return <Suspense fallback={Loading}> {React.createElement(lazy(() => element))}</Suspense>
}

export function getTestMenuRoute(props: TestMenuRouteProps): MenuObject {
	const { modules, path = '/', fold = true } = props

	const children = modules.map(module => {
		const { name, element } = module
		return {
			name,
			path: path + name,
			element,
		}
	})

	return {
		path,
		element: <Menu fold={fold} menu={children} />,
		children,
	}
}