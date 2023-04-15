import React, { ReactNode, useState } from "react"
import { classNames } from 'harpe'
import { InputProps, InputChangeEvent } from '../type'
import { Icon } from '@/icon'
import './index.less'

export interface InputObjectProps extends InputProps {
	fold?: boolean
	defaultFold?: boolean
	dataIndex?: string
	dataIndexes?: string[]
	unfoldIcon?: ReactNode
	foldIcon?: ReactNode
}

export function InputObject(props: InputObjectProps) {

	const [foldStatus, setFoldStatus] = useState<boolean>()

	const {
		className, onChange,
		dataIndexes = [],
		foldIcon = <Icon type='appManage' size={18} style={{
			marginLeft: 8
		}} />,
		unfoldIcon = <Icon type='appManage' size={18} style={{
			marginLeft: 8
		}} />,
		...rest
	} = props

	return (<div className="au-input-object-box">
		<div className="au-input-object-default">
			<input
				className={classNames("au-object-input", className)}
				onChange={(e: InputChangeEvent) => {
					onChange && onChange(e)
				}}
				{...rest}
			/>
			<div
				className="au-input-object-fold-icon"
				onClick={() => {
					setFoldStatus(!foldStatus)
				}}>
				{foldStatus ? foldIcon : unfoldIcon}
			</div>
		</div>
		<div className={classNames("au-input-object-options", { 'fold': foldStatus })} >
			{dataIndexes.map((item, index) => {
				return <React.Fragment key={index}>
					<label>{item}</label>
					<input />
				</React.Fragment>
			})}
		</div>
	</div>)
}