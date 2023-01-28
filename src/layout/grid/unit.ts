import { CSSProperties } from 'react'
/* eslint-disable*/
export function getGridBorder(
	columns: number,
	total: number
): (index: number, border: CSSProperties['border']) => CSSProperties {
	return function (index: number,
		border: CSSProperties['border']) {
		if (border === undefined) return {}
		return {
			borderRight: (index + 1) % columns !== 0 ? border : 'none',
			borderBottom: index >= (total - columns) ? 'none' : border,
		}
	}
}