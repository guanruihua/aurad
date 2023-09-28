import React from "react"
import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"
import { Icon } from "@/icon"

export default {
	name: 'drag',
	path: '/drag',
	icon: <Icon type='drag' size={24} />,
	children: [
		{
			name: 'drag',
			path: '/drag/review',
			element: Lazy(import('.')),
		},
	]
} as MenuObject