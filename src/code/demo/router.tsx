import React from "react"
import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"
import { Icon } from "@/icon"

export default {
	name: 'code',
	path: '/code',
	icon: <Icon type='code' size={24}/>,
	children: [
		{
			name: 'review',
			path: '/code/review',
			element: Lazy(import('.')),
		},
	]
} as MenuObject