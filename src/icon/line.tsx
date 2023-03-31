/* eslint-disable*/
import React from "react"

export interface HorizontalLineProps {
	width?: number | string
}

export function HorizontalLine(props: HorizontalLineProps) {
	return <svg viewBox="0 0 100 3" xmlns="http://www.w3.org/2000/svg">
		<line x1="0" y1="1" x2="100" y2="1" strokeWidth="2" stroke="currentColor" vectorEffect="non-scaling-stroke" />
	</svg>
}

export interface VerticalLineProps {
	height?: number
}

export function VerticalLine(props: VerticalLineProps) {
	const { height = 50 } = props
	return <svg width='12' height={height}>
		<path d={`M6,0 6,${height - 12}`} stroke="currentColor" strokeWidth="2" fill="none" />
	</svg>
}