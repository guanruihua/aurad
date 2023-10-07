import React from "react"
import { isEffectArray, isString } from "asura-eye"
import { classNames } from 'harpe'
import type { MenuObject, MenuProps } from './type'
import { equal } from "abandonjs"
import './index.less'

export function NextSubMenu(props: MenuProps) {

	const {
		fold, select,
		onSelect,
		menu,
		selectNames = [], selectRecords = [],
		lv = 1
	} = props

	return <React.Fragment>
		{menu.map((item: MenuObject, index: number) => {
			const { icon, title, name, path = '', children } = item

			if (!name) return;

			const getShowName = () => {
				const showTitle = title || name
				if (fold) {
					if (icon) return icon
					if (isString(showTitle))
						return (showTitle[0])
				}
				if (icon) return (<>
					{icon}
					{showTitle}
				</>)
				return showTitle
			}

			const showName = getShowName()
			const names = [...selectNames, name]
			const newSelectRecords = [...selectRecords, item]
			const isSelect = name
				&& selectNames[lv - 1] === (name)
				&& equal(select.slice(0, lv), names.slice(0, lv))

			return <div
				key={name + path + index}
				className={classNames('au-next-menu', 'lv' + lv, '__menu__' + name)}>
				<div
					className={classNames(
						'au-next-menu-content',
						{
							isSelect,
							fold,
						})}
					style={{
						marginLeft: (lv - 1) * 10,
					}}
					title={name}
					onClick={() => {
						!isEffectArray(children)
							&& onSelect
							&& onSelect({ name, names, record: item, selectRecords: newSelectRecords })
					}}>
					{showName}
				</div>
				{!fold && isEffectArray(children) && <NextSubMenu
					lv={lv + 1}
					selectNames={select}
					menu={children}
					selectName={names}
					onSelect={onSelect}
				/>}
			</div>
		})}
	</React.Fragment>
}

export function SubMenu(props: MenuProps) {
	const {
		lv = 0,
		menu = [],
		selectName, selectNames,
		onSelect,
		fold, ...rest
	} = props

	return <aside
		className={classNames("au-menu", 'lv' + lv, { 'au-menu-fold': fold })}
		{...rest}>
		<NextSubMenu {...{ menu, fold, selectName, selectNames, onSelect }} />
	</aside>
}