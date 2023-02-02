import { ComponentBaseProps } from "@/assets"
import React from "react"
import { icons, IconType } from './icons'


export interface IconProps extends ComponentBaseProps {
	type: IconType
	size?: number
	width?: number
	height?: number
	fill?: string
	[key: string]: any
}

export function Icon(props: IconProps) {
	const { type, size = 14, width, height, ...rest } = props
	return <svg
		viewBox="0 0 1024 1024"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		width={width || size}
		height={height || size}
		{...rest} >
		<path d={icons[type]} p-id="8848"></path>
	</svg>
}
