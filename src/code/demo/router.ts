import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
	name: 'code',
	path: '/code',
	children: [
		{
			name: 'review',
			path: '/code/review',
			element: Lazy(import('.')),
		},
	]
} as MenuObject