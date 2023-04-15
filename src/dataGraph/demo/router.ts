import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
		name: 'DataGraph',
		path: '/graph',
		children: [
			{
				name: 'step',
				path: '/graph/step',
				element: Lazy(import('../step/demo')),
			},
			{
				name: 'table',
				path: '/graph/table',
				element: Lazy(import('../table/demo')),
			},
			{
				name: 'paging',
				path: '/graph/paging',
				element: Lazy(import('../paging/demo')),
			},
		]
} as MenuObject