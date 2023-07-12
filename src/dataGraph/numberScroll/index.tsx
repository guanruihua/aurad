import React from "react"
import { ComponentProps, prefixHoc } from "@/assets"
import './index.less'
import { SimpleNumberScroll } from "./simple"
import { isNumber } from "asura-eye"
import { classNames } from "harpe"
import { getEffectNumber } from "./util"

export * from './simple'

const prefix = prefixHoc('au-number-scroll')

export interface NumberScroll extends ComponentProps {
	value?: number
	/**
	 * @description 位数
	 * @default 4
	 */
	maxLength?: number
	rootStyle?: React.CSSProperties
	style?: React.CSSProperties
	itemStyle?: React.CSSProperties
}


export function NumberScroll(props: NumberScroll) {
	const { className, value: originValue = 0, maxLength = 4, rootStyle = {}, style = {}, itemStyle = {}, ...rest } = props

	const value = getEffectNumber(originValue, maxLength)
	const valueStr = value.toString()
	const len = valueStr.length
	const newValueStr = len < maxLength ? new Array(maxLength - len).fill('0').join('') + valueStr : valueStr

	return (<div
		className={classNames(prefix(), className)}
		style={{
			gridTemplateColumns: `repeat(${maxLength}, 30px)`,
			...rootStyle,
		}}
		{...rest}
	>
		{Array.from({ length: 4 }, (_, index) => {
			const tmp = Number(newValueStr[index])
			const val = isNumber(tmp) ? tmp : 0
			return (
				<SimpleNumberScroll
					style={style}
					itemStyle={itemStyle}
					key={index}
					value={val} />
			)
		})}
	</div>)
}
