import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
	name: 'layout',
	path: '/layout',
	children: [
		{
			name: 'card',
			path: '/layout/card',
			element: Lazy(import('../card/demo')),
		},
		{
			name: 'space',
			path: '/layout/space',
			element: Lazy(import('../space/demo')),
		},
		{
			name: 'waterfall',
			path: '/layout/waterfall',
			element: Lazy(import('../waterfall/demo')),
		},
	]
} as MenuObject