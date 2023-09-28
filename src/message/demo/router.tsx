import React from "react"
import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"
import { Icon } from "@/icon"

export default {
	name: 'msg',
	path: '/msg',
	icon: <Icon type='message' size={24} />,
	children: [
		{
			name: 'dialog',
			path: '/msg/dialog',
			element: Lazy(import('../dialog/demo')),
		},
		{
			name: 'popconfirm',
			path: '/msg/popconfirm',
			element: Lazy(import('../popconfirm/demo')),
		},
	],
} as MenuObject