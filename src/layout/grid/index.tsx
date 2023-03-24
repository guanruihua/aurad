import React, { CSSProperties } from "react"
import { isNumber } from "asura-eye"
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import { Item } from './item'
import { getGridBorder, getGridSpanLayout, initIgnore } from './util'
import { Merge } from './type'
import './index.less'

export interface Grid extends ComponentProps {
	/**
	 * @description 边框, 以及子元素边框
	 */
	border?: CSSProperties['border']
	/**
	 * @description 单元格ClassName
	 */
	childClassName?: string
	/**
	 * @description 填充(fill)单元格ClassName
	 */
	fillChildClassName?: string
	/**
	 * @description 单元格style
	 */
	childStyle?: CSSProperties
	/**
	 * @description 列数
	 * @default 12
	 */
	columns?: number
	/**
	 * @description 行数, 与columns配合, 多余的元素不会渲染, 优先级高过maxRows
	 * @default 'auto'
	 */
	rows?: number | 'auto'
	/**
	 * @description 行数, 与columns配合, 多余的元素不会渲染
	 * @default 'auto'
	 */
	maxRows?: number | 'auto'
	/**
	 * @description 填充空白单元格, 会影响指定行数的填充
	 * @default true
	 */
	fill?: boolean

	/**
	 * @description 合并单元格 { [index]:{row: number, column:number} }
	 */
	merge?: Merge
}

export function Grid(props: Grid) {
	const {
		fill = true, merge = {},
		columns = 12, rows = 'auto', maxRows = 'auto',
		border, childClassName, childStyle = {}, fillChildClassName,
		style = {}, className, children, ...rest
	} = props
	const useRows = rows === 'auto' ? maxRows : rows
	const count = React.Children.count(children)
	let total = (useRows == 'auto' || fill === false) ? Math.ceil(count / columns) * columns : useRows * columns

	let extra = total - count
	if (isNumber(useRows)) {
		total = useRows * columns
		extra = 0
	}
	const getBorder = getGridBorder(columns, total, border)
	const getSpanLayout = getGridSpanLayout(merge, columns)
	const ignore = initIgnore(merge, columns)

	return <div
		className={classNames('grid', className)}
		style={{
			border,
			gridTemplateColumns: `repeat(${columns},1fr)`,
			...style
		} as CSSProperties}
		{...rest}>
		{React.Children.map(children, (child, index: number) => {
			const { className: unitClassName, style: unitStyle, ...unitRest } = child?.props || {}
			if ((index + 1) > total || (ignore as number[]).includes(index)) return;
			return React.cloneElement(child, {
				className: classNames(childClassName, unitClassName),
				style: {
					...getBorder(index),
					...getSpanLayout(index),
					...childStyle,
					...unitStyle
				},
				...unitRest
			})
		})}
		{fill && isNumber(extra) && extra > 0 && new Array(extra).fill(null).map((child, i: number) => {
			const index = i + count
			return <div
				style={{
					...getBorder(index),
					...childStyle,
				}}
				key={index}
				className={classNames("grid-item", fillChildClassName, childClassName)}
			/>
		})}
	</div>
}

Grid.Item = Item

