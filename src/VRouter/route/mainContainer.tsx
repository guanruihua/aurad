import React from "react"
import { isArray } from "check-it-type"
import { BrowserRouter, Routes, Route, RouteProps } from 'react-router-dom'
import type { CMM, MenuObject } from '../type'
import './index.less'

export interface MainContainer extends CMM {
	menu: MenuObject[]
	/**
	 * @default '/'
	 */
	basename?: string
	location?: Partial<Location> | string;
	window?: Window
}

export function MainContainer(props: MainContainer) {
	const { basename = '/', window } = props
	return (
		<BrowserRouter
			basename={basename}
			window={window} >

			<Routes location={props.location}>
				{props.menu.map(router => {
					const { path, element, children, ...rest } = router
					if (children) {
						return <Route
							key={path}
							path={path}
							element={element}>
							{isArray(children) && children.map((item) => {
								return <Route
									key={item.path}
									{...item as RouteProps}
								/>
							})}
						</Route>
					}
					return <Route
						key={path}
						path={path}
						element={element} {...rest} />
				})}
			</Routes>
		</BrowserRouter>
	)
}