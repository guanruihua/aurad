/* eslint-disable*/
import React, { useState } from "react"
import { ComponentBaseProps } from "@/assets"
import { classNames } from "harpe"
import './index.less'
import { Icon } from '../icon'
import { isUndefined } from "asura-eye"
export interface Checkbox extends ComponentBaseProps {
	defaultValue?: boolean
	value?: boolean
}

export function Checkbox(props: Checkbox) {
	const { children, className, value, defaultValue = false } = props
	const [val, setVal] = useState<boolean>(
		isUndefined(value) ? defaultValue : value
	)
	const handleClick = (e?: any) => {
		setVal(!val)
	}

	return <span className={classNames('au-checkbox', className)}>
		<input
			style={{ visibility: 'hidden' }}
			type="checkbox"
			onChange={(e) => { handleClick(e) }}
			checked={val} />
		<div
			className={classNames("au-checkbox-icon", { 'au-checkbox-select': val })}
			onClick={() => { handleClick() }}>
			{val && <Icon type='yes' size={12} fill='#fff' />}
		</div>
		<label onClick={(e) => handleClick(e)}>{children}</label>
	</span>

}