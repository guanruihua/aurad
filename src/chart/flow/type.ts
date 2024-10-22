import { CSSProperties, ReactNode } from 'react'
import { ArrowProps } from './arrow'

export type FlowChartNodeStatus = 'operable' | 'finish' | 'error' | 'prohibit' | 'empty'
export type FlowFloatCover = ArrowProps

export type FlowChartNode = {
	status?: FlowChartNodeStatus
	id?: string
	label?: string | ReactNode
	style?: CSSProperties
	link?: string | string[]
	width?: number

	/**
	 * @description 水平对齐方式
	 * @default 'center'
	 */
	align?: 'center' | 'start' | 'end'
	/**
	 * @description 水平方向占用单元格
	 * @value 0 相当于 display: none;
	 * @default 1
	 */
	span?: number
	/**
	 * @description 虚线
	 * @default false
	 */
	dottedLine?: boolean
	series?: {
		[link: string]: {
			dottedLine?: boolean
			lineStyle?: CSSProperties
		}
	}
}