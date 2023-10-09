import React from "react"
import { isEffectArray, isString } from "asura-eye"
import { classNames } from 'harpe'
import type { MenuObject, MenuProps } from '../type'
import { equal, stringify } from "abandonjs"
import './index.less'
import { Icon } from "@/icon"

export function NextSubMenu(props: MenuProps) {

	const {
		fold, select,
		onSelect,
		menu,
		selectNames = [], selectRecords = [],
		lv = 1,
		className,
		open, setOpen
	} = props

	const opens: string[] = JSON.parse(open || '[]')

	return <React.Fragment>
		{menu.map((item: MenuObject, index: number) => {
			const { icon, title, name, path = '', children } = item

			const uid = name + path

			if (!name) return;

			const handleSelect = () => {
				// console.log(uid, open);
				const newOpens = opens.includes(uid)
					? opens.filter(i => i !== uid)
					: [...opens, uid]
				setOpen(stringify(newOpens))
			}

			const getShowName = () => {
				const showTitle = title || name
				if (fold) {
					if (icon) return
					if (isString(showTitle))
						return (showTitle[0])
				}
				return showTitle
			}

			const showName = getShowName()
			const showNextStatus = !fold && isEffectArray(children)
			const foldNext = showNextStatus && opens.includes(uid)

			const names = [...selectNames, name]
			const newSelectRecords = [...selectRecords, item]
			const isSelect = name
				&& selectNames[lv - 1] === (name)
				&& equal(select.slice(0, lv), names.slice(0, lv))

			return <div
				key={name + path + index}
				className={classNames(
					'au-next-menu',
					'lv' + lv,
					className,
				)}>

				<div
					className={classNames(
						'au-next-menu-content',
						{
							isSelect,
							fold,
						})}
					title={name}
					onClick={() => {
						handleSelect()
						!isEffectArray(children)
							&& onSelect
							&& onSelect({ name, names, record: item, selectRecords: newSelectRecords })
					}}>

					<div className="label">
						{icon && <div className="icon">{icon}</div>}
						<div>
							{showName}
						</div>
					</div>
					{showNextStatus && <Icon
						style={{
							cursor: 'pointer',
						}}
						onClick={() => {
							handleSelect()
						}}
						type="bottom" />}

				</div>

				{showNextStatus && <div
					style={{
						height: foldNext ? 0 : 'auto'
						// height: foldNext ? 0 : 38 * children.length
					}}
					className={ 'au-next-menu-content-children' } >
					<NextSubMenu
						lv={lv + 1}
						selectNames={select}
						menu={children}
						selectName={names}
						{...{
							open, setOpen, onSelect
						}}
					/>

				</div>}

			</div>
		})}
	</React.Fragment>
}