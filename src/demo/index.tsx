import React from 'react'
import { ComponentProps } from "@/assets"
import { mock } from 'mock-record'

export function RD(props: ComponentProps) {
	const { style, children, ...rest } = props
	const height = mock('@num(30,80)')
	return <div style={{
		width: mock('@num(30,80)'),
		height,
		lineHeight: height + 'px',
		background: mock('@color'),
		color: '#fff', textAlign: 'center', ...style
	}} {...rest}>
		{children}
	</div>
}

export function RDS(props: ComponentProps & { count?: number }) {
	const { count = 10, ...rest } = props
	return <React.Fragment>
		{new Array(count).fill('').map((_, index) => {
			return <RD key={index} {...rest}>{index}</RD>
		})}
	</React.Fragment>
}