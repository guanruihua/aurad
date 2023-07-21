import React from "react"
import { classNames } from "harpe"
import { Icon } from '@/icon'
import { Group } from './group'
import type { CheckboxProps } from './type'
import { CheckboxItem } from './item'
import './index.less'
import { isEmpty } from "asura-eye"

export * from './type'
export * from './item'

export function Checkbox(props: CheckboxProps) {

	const { checked, defaultChecked, children, className, label = '', onChange, ...rest } = props

	const [status, setStatus] = React.useState<boolean>(defaultChecked || checked || false)

	React.useEffect(() => {
		if(isEmpty(checked) && isEmpty(defaultChecked) && status){
			setStatus(false)
			return;
		}
		if (isEmpty(checked) && checked !== status) return;
		setStatus(checked)
	}, [checked, defaultChecked])

	const handleClick = () => {
		const newValue = !status
		const newEvent = {
			target: {
				value: newValue,
				checked: newValue
			}
		}
		onChange && onChange(newEvent)
	}

	return (
		<span className={classNames('au-checkbox', className)}>
			<input
				checked={status}
				style={{ visibility: 'hidden' }}
				type="checkbox"
				onChange={() => { handleClick() }}
				{...rest}
			/>
			<div
				className={classNames("au-checkbox-icon", { 'au-checkbox-select': status })}
				onClick={() => { handleClick() }}>
				{status && <Icon type='yes' size={12} fill='#fff' />}
			</div>
			<label onClick={() => handleClick()}>{children || label}</label>
		</span>
	)
}

Checkbox.Group = Group
Checkbox.Item = CheckboxItem