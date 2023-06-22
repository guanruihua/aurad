import React, { useState, useEffect } from "react"
import { Outlet, useNavigate } from 'react-router-dom'
import { isUndefined } from "asura-eye"
import { classNames } from 'harpe'
import { SubMenu, type MenuObject, Icon } from '../src'
import './index2.less'
import { isEmpty } from "asura-eye"
import { stringify } from "abandonjs"

export function move() {
	const mainDom = document.querySelector('.au-main')
	const contentDom = document.querySelector('.au-content-move-border')

	if (isEmpty(contentDom) || isEmpty(mainDom)) return;

	function onMouseMove(e: DragEvent) {
		e.preventDefault && e.preventDefault()
		e.dataTransfer?.effectAllowed && (e.dataTransfer.effectAllowed = 'move');
		e.dataTransfer?.dropEffect && (e.dataTransfer.dropEffect = 'move');
		if (isEmpty(mainDom)) return;
		const asideWidth = e.clientX > 100 ? e.clientX : 100
		mainDom.setAttribute('style', `grid-tempLate-columns:${asideWidth}px 1fr;`)
		localStorage.setItem('au-aside-menu-width', String(asideWidth))
	}

	contentDom.addEventListener('dragend', onMouseMove)
}

export interface MenuProps {
	menu: MenuObject[]
	/**
	 * @default true
	 */
	fold?: boolean
}

export function Menu(props: MenuProps) {

	const { menu: originMenu = [], ...rest } = props
	const nav = useNavigate()
	const menu = originMenu[0].children || []
	const groupNames = menu.map(i => i.name).filter(Boolean)

	const [select, setSelect] = useState<string[]>([])
	const [fold, setFold] = useState<boolean>(isUndefined(props.fold) ? true : props.fold)
	const [showMenu, setShowMenu] = useState<MenuObject[]>(menu)
	const [selectGroupName, setSelectGroupName] = useState<string>('')

	const handleGroup = (groupName: string) => {

		localStorage.setItem('au-show-menu-group-name', groupName)
		setSelectGroupName(groupName)
		if (groupName === '') setShowMenu(menu)
		for (let i = 0; i < menu.length; i++) {
			const { name, children = [], path: rootPath = '/' } = menu[i]
			if (groupName === name) {
				setShowMenu(children)
				const { path = rootPath } = children[0] || {}
				path && nav(path)
				return;
			}
		}
		return;
	}

	useEffect(() => {
		const names = location.pathname.split('/').filter(Boolean)
		if (names && names.length) setSelect(names)
		const groupName = localStorage.getItem('au-show-menu-group-name') || ''
		handleGroup(groupName)
	}, [])


	const newProps = {
		...rest,
		menu: showMenu,
		select,
		setSelect,
		fold,
	}

	const asideWidth = localStorage.getItem('au-aside-menu-width')

	const hasASide = showMenu && showMenu.length > 0

	useEffect(() => {
		move()
	}, [hasASide])

	const newStyle = hasASide ? (
		fold
			? { gridTemplateColumns: `60px 1fr` }
			: { gridTemplateColumns: `${asideWidth ? asideWidth + 'px' : '10vw'} 1fr` }
	) : { gridTemplateColumns: `1fr` }

	function onMouseCur(e: React.DragEvent<HTMLElement>) {
		e.preventDefault && e.preventDefault();
		e.stopPropagation()
		e.dataTransfer?.effectAllowed && (e.dataTransfer.effectAllowed = 'move');
		e.dataTransfer?.dropEffect && (e.dataTransfer.dropEffect = 'move');
	}

	return <div
		className={classNames("au-main", { fold })}
		style={newStyle}
	>
		{hasASide
			&& (
				<SubMenu
					onDragEnter={onMouseCur}
					onDragOver={onMouseCur}
					{...newProps} />
			)
		}

		<div className="au-content">
			<div className={classNames("au-header", { fold })}>
				<div style={{ display: 'flex' }}>
					{hasASide && <button
						onClick={() => {
							setFold(!fold)
						}}>
						<Icon
							type={fold ? 'fold' : 'unFold'}
							size={32}
							fill='#c5c5c5' />
					</button>}
					<button onClick={() => handleGroup('')}>
						<Icon type="home" size={24} />
					</button>
				</div>
				<h2
					key={stringify(select)}
				>
					{select.map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' / ')}
				</h2>
			</div>
			{hasASide && <div
				className="au-content-move-border"
				onDragEnter={onMouseCur}
				onDragOver={onMouseCur}
				draggable={!fold}
			/>}
			<div
				className="au-content-container"
				onDragEnter={onMouseCur}
				onDragOver={onMouseCur}
			>
				{selectGroupName === '' ? (
					<div style={{
						display: 'flex',
						gap: 8,
					}}>
						{groupNames.map(name => {
							if (name)
								return (
									<button
										style={{
											padding: '20px 30px',
											fontSize: 20,
											fontWeight: 'bold',
											textTransform: 'capitalize'
										}}
										key={name}
										onClick={() => handleGroup(name)}
									>
										{name}
									</button>
								)
						})}
					</div>
				) : <Outlet />}
			</div>
		</div>
	</div>
}
