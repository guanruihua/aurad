import { RouteObject } from 'react-router-dom'

export interface MenuObject extends Omit<RouteObject, 'children'> {
	name?: string
	children?: MenuObject[]
}