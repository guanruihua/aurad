import type { CSSProperties } from 'react'
import type { Align } from './type'
/**
 * @description 小于576px
 */
export const xs = 576
/**
 * @description 大于等于576px
 */
export const sm = 576
/**
 * @description 大于等于768px
 */
export const md = 768
/**
 * @description 大于等于992px
 */
export const lg = 992
/**
 * @description 大于等于1200px
 */
export const xl = 1200
/**
 * @description 大于等于1600px
 */
export const xxl = 1600

export const FlexAlign: Record<Align, CSSProperties['justifyContent']> = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	between: 'space-between',
	around: 'space-around',
}