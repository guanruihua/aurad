import React, { CSSProperties } from "react"
import { ComponentProps } from "@/assets"
import './index.less'
import { classNames } from "harpe"


export type SpaceAlign = 'start' | 'end' | 'center' | 'between'

export interface SpaceProps extends ComponentProps {

	/**
	 * @description 水平对齐方式
	 */
	align?: SpaceAlign
	/**
	 * @description 换行
	 * @default true
	 */
	wrap?: boolean
	/**
	 * @description 间隔大小
	 * @default 10px
	 * @example '10px 5px': 垂直间隔10px, 水平间隔5px
	 */
	gap?: number | string
}


const FlexAlign: Record<SpaceAlign, CSSProperties['justifyContent']> = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	between: 'space-between'
}

export function Space(props: SpaceProps) {

	const {
		className, style, children,
		align = 'start',
		wrap = true,
		gap = 10,
		...rest
	} = props

	return <div
		className={classNames("au-space", className)}
		style={{
			gap,
			justifyContent: FlexAlign[align],
			flexWrap: wrap ? 'wrap' : 'nowrap',
			...style
		}}
		{...rest}>
		{children}
	</div>
}