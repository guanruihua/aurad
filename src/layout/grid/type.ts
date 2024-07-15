import { type CSSProperties } from "react"
import { type ObjectType } from 'abandonjs'
import { type ComponentProps } from '@/assets'
import { ClassNameType } from 'harpe'

export type Merge = ObjectType<{
	row: number,
	column: number
}>

export interface GridProps extends ComponentProps {
	/**
	 * @description 单元格ClassName
	 */
	childClassName?: ClassNameType
	/**
	 * @description 填充(fill)单元格ClassName
	 */
	fillChildClassName?: ClassNameType
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