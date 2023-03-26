/* eslint-disable*/
import React, { ReactNode, useId, useState } from "react"
import { isEffectArray, isUndefined, type } from "asura-eye"
import { stringify } from "abandonjs"

export interface UnitMsgProps {
	children?: any
	name?: string
	unit?: Record<string, UnitItem[]>
}

export interface UnitItem {
	msg: string | string[]
	time: string
}

export const UnitMsg = (props: UnitMsgProps) => {
	const { children } = props
	// const [msg, setMsg] = useState<string[]>([])
	const [msg, setMsg] = useState<UnitItem[]>([])
	const log = (m: any) => {
		setMsg([{
			time: new Date().toLocaleTimeString(),
			msg: stringify(m),
		}, ...msg])
	}
	console.log(children)
	return <div className="unit">
		{React.createElement(children, { log })}
		{
			msg.map((item: UnitItem, index: number) => {
				const { msg, time } = item
				return <div key={index}>
					<span>{stringify(msg)}</span>
					<span>{`<${time}>`}</span>
				</div>
			})
		}
	</div>
}