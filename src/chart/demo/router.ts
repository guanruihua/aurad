import { Lazy } from "@/utils"
import  type { MenuObject } from "@/layout"

export default {
	name: 'Chart',
	path: '/chart',
	children: [
		{
			name: 'flow',
			path: '/chart/flow',
			children: [
				{
					name: 'fix',
					path: '/chart/flow/fix',
					element: Lazy(import('../flow/demo/fix')),
				},
			],
		},
		{
			name: 'echart',
			path: '/chart/echart',
			element: Lazy(import('../echart/demo')),
		},
	]
} as MenuObject