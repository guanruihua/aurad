/* eslint-disable*/
import React from "react"
import { isArray } from "asura-eye"
import { BrowserRouter, Routes, Route, RouteProps, useRoutes, RouteObject } from 'react-router-dom'
import type { MenuObject } from '../type'
import type { ComponentBaseProps } from '@/assets'
import './index.less'

export interface BrowserContainer extends ComponentBaseProps {
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
	console.log(menu)
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