import React, { useState, useEffect } from "react"
import { Outlet } from 'react-router-dom'
import { isUndefined } from "asura-eye"
import { classNames } from 'harpe'
import type { MenuObject } from './type'
import { getIcon } from '../../icon'
import { SubMenu } from './submenu'
import './index.less'

export interface Menu {
	menu: MenuObject[]
	/**
	 * @default true
	 */
	fold?: boolean
}

export function Menu(props: Menu) {

	const [select, setSelect] = useState<string[]>([])
	const [fold, setFold] = useState<boolean>(isUndefined(props.fold) ? true : props.fold)

	useEffect(() => {
		const names = location.pathname.split('/').filter(Boolean)
		if (names && names.length) setSelect(names)
	}, [])

	const newProps = {
		...props,
		select, setSelect,
		fold, setFold,
	}

	return <div
		className={classNames("main", { fold })}>
		<SubMenu {...newProps} />
		<div className="content">
			<div className={classNames("header", { fold })}>
				<button
					onClick={() => {
						setFold(!fold)
					}}>
					{getIcon(fold ? 'fold' : 'unFold', 32, '#c5c5c5')}
				</button>
				<h2>
					{select.join(' / ')}
				</h2>
			</div>
			<Outlet />
		</div>
	</div>
}