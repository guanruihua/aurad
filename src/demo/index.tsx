import React from 'react'
import { ComponentProps } from "@/assets"
import { mock } from 'mock-record'

export function RD(props: ComponentProps) {
	const { style, children, ...rest } = props
	const height = mock('@num(30,80)')
	return <div style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: mock('@num(30,80)'),
		height,
		background: mock('@color'),
		color: '#fff', textAlign: 'center',
		...style
	}} {...rest}>
		{children}
	</div>
}

export function RFD(props: ComponentProps) {
	const { style, children, ...rest } = props
	return <div style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		background: mock('@color'),
		color: '#fff',
		textAlign: 'center',
		...style
	}} {...rest}>
		{children}
	</div>
}

export function RDS(props: ComponentProps & {
	count?: number,
	fill?: boolean,
}) {
	const { fill, array, count = 10, ...rest } = props

	if (fill === true) {
		return <React.Fragment>
			{new Array(count).fill('').map((_, index) => {
				return <RFD key={index} {...rest}>{index}</RFD>
			})}
		</React.Fragment>
	}
	return <React.Fragment>
		{new Array(count).fill('').map((_, index) => {
			return <RD key={index} {...rest}>{index}</RD>
		})}
	</React.Fragment>
}