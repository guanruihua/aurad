import React, { useState, useEffect } from "react"
import { Link, Outlet } from 'react-router-dom'
import { isUndefined } from "asura-eye"
import { classNames } from 'harpe'
import type { MenuObject } from '../type'
import { getIcon } from '../icon'

export interface Menu {
	menu: MenuObject[]
	/**
	 * @default true
	 */
	fold?: boolean
}

export function Menu(props: Menu) {

	const { menu = [] } = props
	const [select, setSelect] = useState<string>('')
	const [fold, setFold] = useState<boolean>(isUndefined(props.fold) ? true : props.fold)

	useEffect(() => {
		const names = /(\w+)$/.exec(location.href)
		if (names && names.length) setSelect(names[0])
	}, [])

	return <div
		className={classNames("main", { fold })}>
		<aside className="menu">
			{menu.map((item: MenuObject) => {
				if (item.open === true) return
				const { name, path } = item
				if (path && path !== '/') {
					const _name = name || path.replace('/', '')
					const showName = fold ? (_name[0]) : (_name)
					return <Link
						to={path}
						className={classNames({
							isSelect: select === name,
							fold,
						})}
						title={name}
						key={name + path}
						onClick={() => {
							name && setSelect(name)
						}}>
						{showName}
					</Link>
				}
			})}
		</aside>
		<div className="docs-component-content">
			<div className={classNames("header", { fold })}>
				<button
					onClick={() => {
						setFold(!fold)
					}}>
					{getIcon(fold ? 'fold' : 'unFold', 32, '#c5c5c5')}
				</button>
				<h2>
					{select}
				</h2>
			</div>
			<Outlet/>
		</div>
	</div>
}