import { type ClassNameType } from 'harpe'
import type { ReactNode } from 'react'
import type { RouteObject } from 'react-router-dom'

export interface MenuObject extends Omit<RouteObject, 'children'> {
	id?: string
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

export interface MenuProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect' | 'className'> {
	hook: any

	lv?: number

	className?: ClassNameType

	[key: string]: any
}