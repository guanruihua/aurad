/* eslint-disable*/
import React, { useState, useEffect } from "react"
import { Link, Outlet } from 'react-router-dom'
import { isArray, isUndefined } from "asura-eye"
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
	const [hover, setHover] = useState<string>('')
	const [fold, setFold] = useState<boolean>(isUndefined(props.fold) ? true : props.fold)
	const [showLv2, setShowLv2] = useState<boolean>(false)

	const [menuWidth, setMenuWidth] = useState<number>(0)

	useEffect(() => {
		const names = /(\w+)$/.exec(location.href)
		if (names && names.length) setSelect(names[0])
	}, [])

	useEffect(() => {
		const unFoldWidth = window.innerWidth / 10
		const foldWidth = 60
		setMenuWidth(fold ? foldWidth : unFoldWidth)
	}, [fold])

	return <div
		className={classNames("main", { fold })}>
		<aside className="menu">
			{menu.map((item: MenuObject) => {
				const { name, path, children } = item
				if (path && path !== '/') {
					const _name = name || path.replace('/', '')
					const showName = fold ? (_name[0]) : (_name)
					return <div key={name + path + menuWidth} className={classNames("lv1", { fold }, '__menu__' + name)}>
						<Link
							to={path}
							className={classNames({
								isSelect: select === name,
								fold,
							})}
							title={name}
							onMouseEnter={() => {
								setShowLv2(true)
								name && setHover(name)
							}}
							onClick={() => {
								name && setSelect(name)
							}}>
							{showName}
						</Link>
						{isArray(children) && <div
							style={{
								display: hover === name ? 'inline-block' : 'none',
								top: document.querySelector(`.lv1.__menu__${name}`)?.getBoundingClientRect().top,
								left: menuWidth,
							}}
							className="lv2">
							{children.map((item: MenuObject, index: number) => {
								console.log(item)
								if (item.path)
									return <Link
										to={item.path}
										onClick={() => {
											item.name && setSelect(item.name)
										}}
										key={name + path + 'c2' + index}
									>{item.name}</Link>
							})}
						</div>}
					</div>
				}
			})}
		</aside>
		<div className="content">
			<div className={classNames("header", { fold })}>
				<button
					onClick={() => {
						// setShowLv2(false)
						setHover('')
						setFold(!fold)
					}}>
					{getIcon(fold ? 'fold' : 'unFold', 32, '#c5c5c5')}
				</button>
				<h2>
					{select}
				</h2>
			</div>
			<Outlet />
		</div>
	</div>
}