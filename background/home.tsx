/* eslint-disable*/
import React, { useState, useEffect } from "react"
import { Outlet, useNavigate } from 'react-router-dom'
import { isUndefined, isEmpty } from "asura-eye"
import { classNames } from 'harpe'
import { stringify } from "abandonjs"
import { SubMenu, type MenuObject, Icon, MenuSelectRecord } from '../src'
import './home.less'

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
	const getMenu = () => {
		return (originMenu[0].children || []).map(item => {
			!item.icon && (item.icon = <Icon type="base-component" size={24} />)
			return item
		})
	}
	const menu = getMenu()

	const [select, setSelect] = useState<string[]>([])

	const [fold, setFold] = useState<boolean>(isUndefined(props.fold) ? true : props.fold)

	useEffect(() => {
	}, [])

	const asideWidth = localStorage.getItem('au-aside-menu-width') || 45

	const hasASide = menu && menu.length > 0

	useEffect(() => {
		move()
	}, [hasASide])

	const newStyle = hasASide ? (
		fold
			? { gridTemplateColumns: `45px 1fr` }
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
					onSelect={(value: MenuSelectRecord) => {
						const { names, record } = value
						const { path, } = record
						setSelect(names)
						path && nav(path)
					}}
					{
					...{
						...rest,
						menu,
						// selectNames: select,
						fold,
					}} />
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
					<button onClick={() => {
						nav('/')
						setSelect([])
					}}>
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
				{/* {
					select.length < 1
						? (
							<div style={{
								display: 'grid',
								gap: 8,
								gridTemplateColumns: 'repeat(auto-fill, 220px)'
							}}>
								{groupNames.map(name => {
									if (name)
										return (
											<button
												style={{
													display: 'inline-block',
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
						)
						: <Outlet />
				} */}
				<Outlet />
			</div>
		</div>
	</div>
}
