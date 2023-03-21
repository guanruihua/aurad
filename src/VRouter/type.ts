import { CSSProperties } from 'react'
import { RouteObject } from 'react-router-dom'

export interface CMM {
	style?: CSSProperties
	className?: string
	children?: any
	[key: string]: any
}

interface _MenuObject extends Record<string, any> {
	name?: string
}

export type MenuObject = RouteObject & _MenuObject