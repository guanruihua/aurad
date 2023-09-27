import type { ReactNode } from 'react'
import type { RouteObject } from 'react-router-dom'

export interface MenuObject extends Omit<RouteObject, 'children'> {
	/**
	 * @description 当前菜单 的 唯一标识
	 */
	name: string
	/**
	 * @description 为空的时候显示 name
	 */
	title?: ReactNode
	icon?: ReactNode
	children?: MenuObject[]
}

export interface MenuSelectRecord {
	name: string
	names: string[]
	record: MenuObject
}

export interface MenuProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
	/**
 * @default true
 */
	fold?: boolean
	menu: MenuObject[]
	/**
	 * @description 当前选中的 选项的name, 
	 */
	selectNames?: string[]

	selectRecords?: MenuObject[]

	lv?: number
	onSelect?(value?: MenuSelectRecord): void
	onRecord?(selectRecords: MenuObject[]): void
	[key: string]: any
}