import React from "react"
import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"
import { Icon } from "@/icon"

export default {
	name: 'feedback',
	path: '/feedback',
	icon: <Icon type='feedback' size={24} />,
	children: [
		{
			name: 'skeleton',
			path: '/feedback/skeleton',
			element: Lazy(import('../skeleton/demo')),
		},
	]
} as MenuObject