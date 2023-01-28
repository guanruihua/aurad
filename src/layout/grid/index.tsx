import React, { CSSProperties } from "react"
import { classNames, ComponentBaseProps } from '@/assets'
import { Item } from './item'
import { getGridBorder } from './unit'
import './index.less'
import { isNumber } from "check-it-type"

export interface Grid extends ComponentBaseProps {
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
}

export function Grid(props: Grid) {
	const {
		fill = true,
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
	const getBorder = getGridBorder(columns, total)

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
			if ((index + 1) > total) return;
			return React.cloneElement(child, {
				className: classNames(childClassName, unitClassName),
				style: {
					...getBorder(index, border),
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
					...getBorder(index, border),
					...childStyle,
				}}
				key={index}
				className={classNames("grid-item", fillChildClassName, childClassName)}
			/>
		})}
	</div>
}

Grid.Item = Item

