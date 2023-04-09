/* eslint-disable*/
import React, { useState, useEffect } from "react"
import { Outlet } from 'react-router-dom'
import { isEffectArray, isUndefined } from "asura-eye"
import { classNames } from 'harpe'
import type { MenuObject } from './type'
import { move } from './handle'
import { Icon } from '../../icon'
import { SubMenu } from './submenu'
import './index.less'
import { ObjectType } from "abandonjs"

export interface Menu {
	menu: MenuObject[]
	group?: ObjectType<string[]>
	/**
	 * @default true
	 */
	fold?: boolean
}

export function Menu(props: Menu) {

	const { group = {}, menu = [], ...rest } = props

	const [select, setSelect] = useState<string[]>([])
	const [fold, setFold] = useState<boolean>(isUndefined(props.fold) ? true : props.fold)
	const [showMenu, setShowMenu] = useState<MenuObject[]>(menu)

	const handleGroup = (groupName: string) => {
		localStorage.setItem('show-menu-group-name', groupName)
		if (groupName === '') setShowMenu(menu)
		const showMenuNameList = group[groupName] || []
		if (isEffectArray<string>(showMenuNameList)) {
			setShowMenu(menu.filter(item => item.name && showMenuNameList.includes(item.name)))
			return;
		}
		setShowMenu(menu)
	}

	useEffect(() => {
		const names = location.pathname.split('/').filter(Boolean)
		if (names && names.length) setSelect(names)
		const groupName = localStorage.getItem('show-menu-group-name') || ''
		handleGroup(groupName)
		move()
	}, [])


	const newProps = {
		...rest,
		menu: showMenu,
		select, setSelect,
		fold, setFold,
	}

	return <div
		className={classNames("main", { fold })}>
		<SubMenu {...newProps} />
		<div className="content">
			<div className={classNames("header", { fold })}>
				<div style={{ display: 'flex' }}>
					<button
						onClick={() => {
							setFold(!fold)
						}}>
						<Icon
							type={fold ? 'fold' : 'unFold'}
							size={32}
							fill='#c5c5c5' />
					</button>
					<button onClick={() => handleGroup('')}>
						Global
					</button>
					{
						Object.keys(group).map(item => {
							return <button
								key={item}
								onClick={() => handleGroup(item)}
							>{item}</button>
						})
					}
				</div>
				<h2>
					{select.map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' / ')}
				</h2>
			</div>
			<div className="content-move-border" ></div>
			<Outlet />

		</div>
	</div>
}