/* eslint-disable*/
import React from "react";
import { ComponentBaseProps } from '@/assets'

export interface MenuItem {
	name: string | React.ReactNode
	icon?: string | React.ReactNode
	children?: MenuItem[]
}

export interface Menu extends ComponentBaseProps {
	menu: MenuItem[]
}

export function Menu(props: Menu) {
	return <div>
		Menu
	</div>
}