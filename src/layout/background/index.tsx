import React from "react"
import { ComponentProps } from "@/assets"
import { classNames } from "harpe"
import './index.less'

type Size = 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | string | number

export interface BackgroundProps extends ComponentProps {
	/**
	 * @description 尺寸大小
	 * @default 'xl'
	 * @type { 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' | string | number }
	 */
	size?: Size
}

export function Background(props: BackgroundProps) {
	const { size = 'xl', style = {}, children, className } = props

	const newStyle: React.CSSProperties = { ...style }
	const sizes = ['s', 'm', 'l', 'xl', 'xxl', 'xxxl']
	if (sizes.includes(size as string)) {
		newStyle['--width' as 'width'] = `var(--size-${size})`
		newStyle['--height' as 'height'] = `var(--size-${size})`
	}
	return (<div
		className={classNames("au-background", className)}
		style={newStyle}
	>
		<div className="au-background-content">
			{children}
		</div>
	</div>)
}
