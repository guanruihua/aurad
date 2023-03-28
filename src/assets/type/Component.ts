import { CSSProperties, ReactNode } from 'react'
import { ObjectType } from 'abandonjs'
export interface ComponentProps extends ObjectType {
	/**
		* @description 
		* @default ''
		*/
	prefixCls?: string
	className?: string
	style?: CSSProperties
	children?: ReactNode | string
}