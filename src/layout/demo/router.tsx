import React from "react"
import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"
import { Icon } from "@/icon"

export default {
	name: 'layout',
	path: '/layout',
	icon: <Icon type="layout" size={24} />,
	children: [
		{
			name: 'card',
			path: '/layout/card',
			element: Lazy(import('../card/demo')),
		},
		{
			name: 'grid',
			path: '/layout/grid',
			element: Lazy(import('../grid/demo')),
		},
		{
			name: 'Flex',
			path: '/layout/flex',
			element: Lazy(import('../flex/demo')),
		},
		{
			name: 'waterfall',
			path: '/layout/waterfall',
			element: Lazy(import('../waterfall/demo')),
		},
		{
			name: 'split',
			path: '/layout/split',
			element: Lazy(import('../split/demo')),
		},
	]
} as MenuObject