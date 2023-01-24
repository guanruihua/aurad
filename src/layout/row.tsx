import React from "react"
import { ObjectType } from 'abandonjs'
import { classNames } from '@/assets'

export interface Row extends ObjectType {
	className?: string
	/**
	 * @description 间隔
	 */
	gap?: number
	/**
	 * @description 列数
	 * @default 24
	 */
	colCount?: number
	children?: any
}

export function Row(props: Row) {
	const { className, children, ...rest } = props
	return <div
		className={classNames(className, 'row')}
		style={{
			gridTemplateColumns: '1fr 1fr'
		}}
		{...rest}>
		{children}
	</div>
}
