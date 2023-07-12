import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
		name: 'dataGraph',
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
			{
				name: 'numberScroll',
				path: '/graph/numberScroll',
				element: Lazy(import('../numberScroll/demo')),
			},
		]
} as MenuObject