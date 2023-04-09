import React from "react"
import { BrowserRouter, useRoutes, RouteObject } from 'react-router-dom'
import type { MenuObject } from '@/layout/type'
import type { ComponentProps } from '@/assets'

export interface BrowserContainer extends ComponentProps {
	menu: MenuObject[]
	/**
	 * @default '/'
	 */
	basename?: string
	location?: Partial<Location> | string;
	window?: Window
}

const GetRoute = (props: { routes: MenuObject[] }) => {
	return useRoutes(props.routes as RouteObject[])
}

export function BrowserContainer(props: BrowserContainer) {
	const { basename = '/', window, menu } = props

	return (
		<React.StrictMode>
			<BrowserRouter
				basename={basename}
				window={window} >
				<GetRoute routes={menu} />
			</BrowserRouter>
		</React.StrictMode>
	)
}