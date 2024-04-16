import type { CSSProperties, ReactNode } from 'react'
import type { ObjectType } from '0type'

export interface ComponentProps extends ObjectType {
	/**
		* @description 
		* @default ''
		*/
	prefixCls?: string
	className?: string | Record<string, boolean>
	style?: CSSProperties
	children?: ReactNode | string
}