import React, { HTMLAttributes, useState } from "react"
import {  ComponentProps } from "@/assets"
import { classNames } from 'harpe'
import { isNumber } from "asura-eye"
import { Select, Input } from '../form'
import { Icon } from '../icon'
import { getShowPageNumRange } from './util'
import './index.less'

export interface Paging extends ComponentProps, Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
	/**
	 * @description 当前页数
	 */
	current?: number
	/**
	 * @description 当前页数
	 * @default 1
	 */
	defaultCurrent?: number

	/**
	 * @description 显示页数个数
	 * @default 5
	 */
	showPageNum?: number
	pageSize?: number
	defaultPageSize?: number
	pageSizeOptions?: number[]

	total?: number
	showTotal?: boolean

	quickJumper?: boolean
	onChange?: (page: number, pageSize?: number) => void
}

export function Paging(props: Paging) {
	const {
		className, showPageNum = 5,
		current, defaultCurrent = 1, total = 0,
		pageSize, defaultPageSize, pageSizeOptions = [10, 20, 50],
		onChange, ...rest
	} = props

	const [gotoValue, setGotoValue] = useState<string>('')
	const [nowCurrent, setNowCurrent] = useState<number>(current === undefined ? defaultCurrent : current)
	const [nowPageSize, setNowPageSize] = useState<number>(pageSize === undefined ? (defaultPageSize || pageSizeOptions[0] || 10) : pageSize)
	// 总页数
	const pageNos = Math.ceil(total / nowPageSize)

	const handleChange = (page: number, pageSize?: number) => {
		if (page < 1) return;
		if (page > pageNos) page = pageNos

		setNowCurrent(page)
		pageSize !== undefined && setNowPageSize(pageSize)
		onChange && onChange(page, pageSize)
	}

	const renderPageArray = getShowPageNumRange(nowCurrent, showPageNum, pageNos)

	return <div
		className={classNames('paging', className)}
		{...rest}>
		<div className="total">Total: {total}</div>
		<div onClick={() => handleChange(nowCurrent - 1, pageSize)}>
			<Icon type="leftArrow" size={10} />
		</div>
		{renderPageArray.map((uIndex: number) => {

			if (uIndex === -1) return <div key={uIndex} className='jump-prev' onClick={() => handleChange(nowCurrent - 5, pageSize)} >
				<Icon size={8} type="ellipsis" fill={'#d9d9d9'} />
			</div>
			if (uIndex === -2) return <div key={uIndex} className='jump-next' onClick={() => handleChange(nowCurrent + 5, pageSize)} >
				<Icon size={8} type="ellipsis" fill={'#d9d9d9'} />
			</div>

			return <div
				key={uIndex}
				className={classNames({
					selected: nowCurrent === uIndex
				})}
				onClick={() => handleChange(uIndex, pageSize)}
			>{uIndex}</div>
		})}
		<div onClick={() => handleChange(nowCurrent + 1, pageSize)}>
			<Icon size={10} type="rightArrow" />
		</div>
		<div className="pageSize-select">
			<Select
				value={pageSize?.toString()}
				// defaultValue={pageSize?.toString()}

				options={pageSizeOptions.map(item => ({
					value: item.toString(), label: item.toString() + '/page'
				}))}
			/>
		</div>
		<div className="goto">
			<div>Goto</div>
			<Input
				value={gotoValue}
				readOnly={false}
				onChange={(e: any) => {
					const { keyCode, target } = e
					if (keyCode === 13 && isNumber(Number(target.value))) {
						setGotoValue('')
						handleChange(Number(target.value), pageSize)
					} else {
						setGotoValue(target.value)
					}
				}}
				onKeyDown={(e: any) => {
					const { keyCode, target } = e
					if (keyCode === 13 && isNumber(Number(target.value))) {
						setGotoValue('')
						handleChange(Number(target.value), pageSize)
					}
				}}
			/>
		</div>
	</div>
}
