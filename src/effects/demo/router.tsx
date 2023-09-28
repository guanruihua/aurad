import React from "react"
import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"
import { Icon } from "@/icon"

export default {
	name: 'Effects',
	path: '/effect',
	icon: <Icon type="effect" size={24} />,
	children: [
		{
			name: 'Border Fusion',
			path: '/effect/fusion',
			element: Lazy(import('../border/demo')),
		},
	]
} as MenuObject