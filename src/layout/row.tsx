import React, { CSSProperties } from "react"
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
export interface Row extends ComponentProps {
	/**
	 * @description 间隔 
	 */
	gap?: number | string
	/**
	 * @description 列数
	 * @default 子元素个数
	 */
	columns?: number
}

export function Row(props: Row) {
	const {
		columns, gap = 0,
		className, style = {},
		children, ...rest
	} = props

	const newColumns = columns === undefined ? React.Children.count(children) : columns
	const newStyle: CSSProperties = {
		gap,
		gridTemplateColumns: `repeat(${newColumns}, 1fr)`,
		...style
	}

	return <div
		className={classNames(className, 'row')}
		style={newStyle}
		{...rest}>
		{children}
	</div>
}
