import React from "react"
import { type ComponentProps } from "@/assets"
import { icons, type IconType } from './icons'
import { isArray } from "asura-eye"
import './index.less'
import { classNames } from "harpe"
export interface IconProps extends ComponentProps {
	type: IconType
	size?: number
	width?: number
	height?: number
	fill?: string
	[key: string]: any
}

export function Icon(props: IconProps) {
	const {
		// eslint-disable-next-line
		prefixCls, className,
		type, size,
		width, height, fill = 'currentColor',
		...rest
	} = props

	const { viewBox = "0 0 1024 1024", path = '' } = icons[type]

	if (type === 'loading') {
		rest.className = classNames(rest.className, 'au-rotate')
	} else
		rest.className = classNames(rest.className)

	return <svg
		viewBox={viewBox}
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		width={width || size || '1em'}
		height={height || size || '1em'}
		{...rest} >
		{isArray(path)
			? path.map((item: string, index: number) => <path key={index} d={item} fill={fill}></path>)
			: <path d={path} fill={fill}></path>
		}
	</svg>
}