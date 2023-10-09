import React from "react"
import { classNames } from 'harpe'
import type { MenuProps } from '../type'
import { NextSubMenu } from '../next'
import { useSessionStorage } from "0hook"

export function SubMenu(props: MenuProps) {
	const {
		lv = 0,
		menu = [],
		className,
		selectName, selectNames,
		onSelect,
		fold, ...rest
	} = props

	const [open, setOpen] = useSessionStorage('menu-aside')

	return <aside
		className={classNames("au-menu", 'lv' + lv, { 'au-menu-fold': fold }, className)}
		{...rest}>
		<NextSubMenu {...{ menu, fold, selectName, selectNames, onSelect, open, setOpen }} />
	</aside>
}