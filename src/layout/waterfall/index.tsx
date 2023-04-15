import { ComponentProps } from '@/assets'
import { debounce } from 'abandonjs'
import { isEmpty } from 'asura-eye'
import React, { useEffect } from 'react'

export interface WaterfallProps extends ComponentProps {
	name?: string
	count?: number
	gap?: number | string
}

export function Waterfall(props: WaterfallProps) {
	const { name, count = 2, gap = 10, children, style = {}, ...rest } = props

	useEffect(() => {
		if (isEmpty(name)) return;
		const content = document.querySelector(`.${name}`)

		const observer = new ResizeObserver(debounce(() => {
			// 监听 宽度修改 count (代开发)
		}, 50));
		if (!content) return;
		observer.observe(content);
		return () => {
			observer.unobserve(content)
		}

	}, [])

	return (
		<div style={{
			columnCount: count,
			gap,
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