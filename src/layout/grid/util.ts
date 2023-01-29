import { isNumber } from 'check-it-type';
import { CSSProperties } from 'react'
import { Merge } from './type'

export function getGridBorder(columns: number, total: number, border: CSSProperties['border']): (index: number) => CSSProperties {
	return function (index: number,
	) {
		if (border === undefined) return {}
		return {
			borderRight: (index + 1) % columns !== 0 ? border : 'none',
			borderBottom: index >= (total - columns) ? 'none' : border,
		}
	}
}

export function getGridSpanLayout(layout: Merge, columns: number) {
	return function (index: number) {

		const unit = layout[index]
		if (!unit) return {}
		const { row = 1, column = 1 } = unit
		const y = Math.ceil((index + 1) / columns)
		const x = ((index + 1) % columns)
		const newStyle = {
			gridArea: `${y}/${x}/ span ${row} / span ${column}`
		} as CSSProperties
		if (x + (column as number) - 1 === columns) {
			newStyle['borderRight'] = 'none'
		}
		return newStyle
	}
}


export function initIgnore(layout: Merge, columns: number): number[] {
	const ignore: number[] = []
	for (let key in layout) {
		if (!isNumber(Number(key))) continue
		const { row = 1, column = 1 } = layout[key]
		if (row === 1 && column === 1) continue
		for (let r = 0; r < row; r++)
			for (let c = 0; c < column; c++) {
				if (r === 0 && c === 0) continue
				ignore.push(Number(key) + r * columns + c)
			}
	}
	return ignore
}