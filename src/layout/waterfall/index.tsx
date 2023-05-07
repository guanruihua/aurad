import React, { CSSProperties, ReactNode, useState } from 'react'
import { ComponentProps } from '@/assets'
import { isUndefined } from 'asura-eye'
import { useLayout } from '../hook'

export interface WaterfallProps extends ComponentProps {
	count?: number
	xGap?: number | string
	yGap?: number | string
}

export function Waterfall(props: WaterfallProps) {
	const {
		count = 2, xGap = 10, yGap, children,
		style = {}, ...rest
	} = props

	const [newCount, setCount] = useState<number>(count)

	const { ref, props: newProps } = useLayout<HTMLDivElement, number>({
		callback: (value: number) => {
			setCount(value)
		},
		defaultValue: count,
		defaultEffectKey: 'count',
		props: rest
	})

	return (
		<div
			ref={ref}
			style={{
				columnCount: newCount,
				gap: xGap,
				...style
			}} {...newProps}>
			{React.Children.map(children, (item) => {

				const exStyle: CSSProperties = {
					overflow: 'hidden',
					breakInside: 'avoid',
				}

				if (!isUndefined(yGap)) {
					exStyle['marginBottom'] = yGap
				}

				if (React.isValidElement(item)) {
					const newProps = { ...item.props }
					newProps.style = { ...exStyle, ...newProps.style }
					return React.cloneElement(item, newProps)
				}

				return <div style={exStyle}>{item}</div>

			})}
		</div>
	)
}

export interface WaterfallItemProps extends ComponentProps {
	title?: ReactNode
	gap?: number | string
}

Waterfall.Item = function (props: WaterfallItemProps) {
	const { gap = 0, title, children, style = {}, ...rest } = props
	if (!isUndefined(title)) {
		return (
			<div style={{ breakInside: 'avoid', marginBottom: gap, ...style }} {...rest}>
				<h2>{title}</h2>
				<div>
					{children}
				</div>
			</div>
		)
	}
	return (
		<div style={{ breakInside: 'avoid', marginBottom: gap, ...style }} {...rest}>
			{children}
		</div>
	)
}