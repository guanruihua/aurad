import React from "react"
import { classNames, ComponentBaseProps } from '@/assets'

export interface GridItem extends ComponentBaseProps {
	/**
	 * @description 水平对齐方式
	 * @default 'center'
	 */
	align?: 'center' | 'start' | 'end'
	verticalAlign?: 'center' | 'start' | 'end'
}

export function Item(props: GridItem) {
	const {
		align = 'center', verticalAlign = 'center',
		style = {}, className,
		children, ...rest
	} = props

	return <div
		className={classNames('grid-item', className)}
		style={{
			justifyContent: align,
			alignItems: verticalAlign,
			...style
		}}
		{...rest}>
		{children}
	</div>
}