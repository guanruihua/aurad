import React from "react"

export { Row } from './row'
export { Col } from './col'

export interface LayoutProps {
	[key: string]: any
}

export function Layout(props: LayoutProps) {
	const { } = props
	return <div>
		Layout
		{JSON.stringify(Object.keys(props))}
	</div>
}