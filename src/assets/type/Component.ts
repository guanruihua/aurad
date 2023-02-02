import { CSSProperties } from 'react'
import { ObjectType } from 'abandonjs'
export interface ComponentBaseProps extends ObjectType {
	/**
		* @description 
		* @default ''
		*/
	prefixCls?: string
	className?: string
	style?: CSSProperties
	children?: any
}