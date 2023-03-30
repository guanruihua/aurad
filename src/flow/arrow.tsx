import React from "react"

export interface RightArrowProps {
	width: number
}

export function RightArrow(props: RightArrowProps) {
	const { width = 100 } = props
	return <svg width={`${width}`} height='12'>
		<defs>
			<marker id="arrow" markerWidth="10" markerHeight="6" refX="2" refY="3" orient="auto">
				<path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
			</marker>
		</defs>
		<path d={`M0,6 ${width - 12},6`} stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
	</svg>
}

export interface BottomArrowProps {
	height?: number
}

export function BottomArrow(props: BottomArrowProps) {
	const { height = 50 } = props
	return <svg width='12' height={height}>
		<defs>
			<marker id="arrow" markerWidth="10" markerHeight="6" refX="2" refY="3" orient="auto">
				<path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
			</marker>
		</defs>
		<path d={`M6,0 6,${height - 12}`} stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
	</svg>
}