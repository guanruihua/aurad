import { CSSProperties } from 'react'
import { ArrowProps } from '@/icon'

export type FlowChartNodeStatus = 'operable' | 'finish' | 'error' | 'prohibit'
export type FlowFloatCover = ArrowProps

export type FlowChartNode = {
	status?: FlowChartNodeStatus
	id?: string
	label?: string
	style?: CSSProperties
	link?: string | string[]
	width?: number
	// 右箭头
	rightArrow?: boolean
	rightArrowCover?: FlowFloatCover
	// 下箭头
	bottomArrow?: boolean
	bottomArrowCover?: FlowFloatCover
	// 右下箭头
	bottomRightArrow?: boolean
	bottomRightArrowCover?: FlowFloatCover
}