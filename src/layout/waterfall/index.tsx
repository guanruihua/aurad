import { ComponentProps } from '@/assets'
import { isString } from 'asura-eye'
import React from 'react'

export interface WaterfallProps extends ComponentProps {
	count?: number
	gap?: number | string
}

export function Waterfall(props: WaterfallProps) {
	const { count = 2, gap = 10, children, style = {}, ...rest } = props
	return (
		<div style={{
			columnCount: count,
			gap: isString(gap) ? gap : `0 ${gap}px`,
			...style
		}} {...rest}>
			{children}
		</div>
	)
}

export interface WaterfallItemProps extends ComponentProps {
	count?: number
}

Waterfall.Item = function (props: WaterfallItemProps) {
	const { children, style = {}, ...rest } = props
	return (
		<div style={{ breakInside: 'avoid', ...style }} {...rest}>
			{children}
		</div>
	)
}