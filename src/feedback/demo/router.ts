import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
	name: 'feedback',
	path: '/feedback',
	children: [
		{
			name: 'skeleton',
			path: '/feedback/skeleton',
			element: Lazy(import('../skeleton/demo')),
		},
	]
} as MenuObject