/* eslint-disable*/
import React, { useState } from "react"
import { ComponentBaseProps } from "@/assets"
import { classNames } from "harpe"
import './index.less'

export interface Checkbox extends ComponentBaseProps {
	defaultValue?: boolean
	value?: boolean
}

export function Checkbox(props: Checkbox) {
	const { children, className } = props
	const [val, setVal] = useState<boolean>(false)
	const handleClick = (e: any) => {
		setVal(!val)
	}

	return <span className={classNames('au-checkbox', className, { select: val })}>
		<input type="checkbox"
			// onClick={(e) => { handleClick(e) }}
			onChange={(e) => { handleClick(e) }}
			checked={val} />
		<label onClick={(e) => handleClick(e)}>{children}</label>
	</span>

}