import { ComponentProps } from "@/assets"
import React, { useEffect, useRef } from "react"
import { write } from "./write"

export interface XYCoordinateProps extends ComponentProps {
	width?: string | number
	height?: string | number
}

export function XYCoordinate(props: XYCoordinateProps) {

	const { width = 600, height = 600, ...rest } = props

	const ref = useRef(null)
	const fx = (x: number) => x / 4
	useEffect(() => {
		ref.current && write(ref.current, fx)
	}, [ref.current])

	return (<canvas
		ref={ref}
		style={{
			// background: '#eee',
		}}
		width={width}
		height={height}
		{...rest} />)
}