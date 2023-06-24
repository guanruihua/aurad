import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
	name: 'msg',
	path: '/msg',
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