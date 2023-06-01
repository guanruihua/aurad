import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
	name: 'drag',
	path: '/drag',
	children: [
		{
			name: 'drag',
			path: '/drag/review',
			element: Lazy(import('.')),
		},
	]
} as MenuObject