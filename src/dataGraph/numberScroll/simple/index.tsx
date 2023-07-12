import { ComponentProps, prefixHoc, useInterval } from "@/assets"
import React, { CSSProperties } from "react"
import './index.less'
import { getEffectNumber, getMapHoc } from "./util"
import { classNames } from "harpe"

const prefix = prefixHoc('au-simple-scroll')


export interface SimpleNumberScrollProps extends ComponentProps {
	value?: number
	style?: CSSProperties
	itemStyle?: CSSProperties
}

export function SimpleNumberScroll(props: SimpleNumberScrollProps) {
	const { className, value: originValue = 0, style = {}, itemStyle = {}, ...rest } = props

	const value = getEffectNumber(originValue)
	const itemHeight = 60
	const itemWidth = 30

	const getMap = getMapHoc(itemHeight, itemWidth)

	const list = Array.from({ length: 10 }, (_, index) => {
		const [top, left] = getMap(index - value + 2)
		const newStyle: CSSProperties = {
			top,
			left,
			width: itemWidth,
			height: itemHeight,
			lineHeight: itemHeight + 'px',
			color: '#fff',
			...itemStyle
		}

		return {
			value: index,
			style: newStyle
		}
	})

	return (<div
		className={classNames(prefix(), className)}
		style={{
			width: itemWidth,
			height: itemHeight,
			...style
		}}
		{...rest}
	>
		{list.map((item, index) => {
			const { value, style } = item
			return (
				<div
					className={prefix('item')}
					style={style}
					key={index}>
					{value}
				</div>
			)
		})}
	</div>)
}
