import React from "react"
import { classNames } from 'harpe'
import { InputProps, InputChangeEvent } from '../type'
import './index.less'
import { isEffectArray, isEmpty, type ObjectType } from "abandonjs"
import { Icon } from "@/icon"


export function InputTag(props: InputProps) {

	const { className, onChange, ...rest } = props

	const [value, setValue] = React.useState<string>('')
	const [list, setList] = React.useState<ObjectType[]>([])
	const del = (item: ObjectType) => {
		setList(list.filter(unit => {
			if (
				!isEmpty(unit.id) && unit.id === item.id
			) return false
			return true
		}))
	}

	const uId = () => new Date().getTime() + '_' + list.length

	return (
		<div
			className={classNames("au-input-tags", className)}
		>
			{isEffectArray(list) && list.map((item: any) => {
				const { value, id, label = '' } = item
				return (<div
					className="au-input-tags-item"
					title={label}
					key={id || value}>
					{label}
					<Icon
						type="close"
						onClick={() => del(item)}
					/>
				</div>)
			})}
			<input
				value={value}
				inputMode="text"
				onChange={(e: InputChangeEvent) => {
					onChange && onChange(e)
					setValue(e.target.value)
				}}
				onKeyUp={e => {
					if (isEmpty(value) || value === '') return;
					if (e.code === 'Enter') {
						setList([
							...list,
							{
								id: uId() + value,
								value: value,
								label: value
							}
						])
						setValue('')
					}
				}}
				// {...rest}
			/>
		</div>
	)
}