import React from "react"
import { Link } from 'react-router-dom'
import { isEffectArray } from "asura-eye"
import { classNames } from 'harpe'
import type { MenuObject } from './type'
import { equal } from "abandonjs"

export interface NextSubMenu {
	lv?: number
	menu: MenuObject[]
	fold?: boolean
	select: string[]
	selectValue?: string[]
	setSelect?: (select: string[]) => void
}

export function NextSubMenu(props: NextSubMenu) {

	const { fold, select, setSelect, menu, selectValue = [], lv = 1 } = props

	return <React.Fragment>
		{menu.map((item: MenuObject, index: number) => {
			const { name, path = '', children } = item
			if (!path || !name) return;
			const _name = name || path.replace('/', '')
			const showName = fold ? (_name[0]) : (_name)
			const names = selectValue.concat(name)
			const isSelect = name && select[lv - 1] === (name) && equal(select.slice(0, lv), names.slice(0, lv))

			return <div
				key={name + path + index}
				className={classNames('lv' + lv, { fold }, '__menu__' + name)}>
				<Link
					to={path}
					className={classNames({
						isSelect,
						fold,
					})}
					style={{
						paddingLeft: 8,
						marginLeft: (lv - 1) * 10,
					}}
					title={name}
					onClick={() => {
						setSelect && name && setSelect(names)
					}}>
					{showName}
				</Link>
				{!fold && isEffectArray(children) && <NextSubMenu
					lv={lv + 1}
					select={select}
					menu={children}
					selectValue={names}
					setSelect={setSelect}
				/>}
			</div>
		})}
	</React.Fragment>
}


export interface SubMenu {
	/**
 * @default true
 */
	fold?: boolean
	menu: MenuObject[]
	select: string[]
	[key: string]: any
}

export function SubMenu(props: SubMenu) {
	const { menu = [], select, setSelect, fold } = props

	return <aside className="menu" >
		<NextSubMenu {...{ menu, fold, select, setSelect }} />
	</aside>
}