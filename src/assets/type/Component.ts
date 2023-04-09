import type { CSSProperties, ReactNode } from 'react'
import type { ObjectType } from 'abandonjs'
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