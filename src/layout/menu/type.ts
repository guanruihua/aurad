import { RouteObject } from 'react-router-dom'

export interface MenuObject extends Omit<RouteObject, 'children'> {
	/**
	 * @description 保持和当前模块的路径名称一致
	 */
	name?: string
	children?: MenuObject[]
}