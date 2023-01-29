import React from "react"
import { classNames, ComponentBaseProps } from "@/assets"
import './index.less'

export interface Paging extends ComponentBaseProps {

	current?: number
	defaultCurrent?: number

	pageSize?: number
	defaultPagSize?: number
	pageSizeOptions?: number[]

	total?: number
	showTotal?: boolean

	quickJumper?: boolean
	onChange?: (page: number, pageSize: number) => void
}

export function Paging(props: Paging) {
	const { className } = props
	return <div className={classNames('paging', className)}>
		<div>{'<'}</div>
		<div>{'>'}</div>
	</div>
}
