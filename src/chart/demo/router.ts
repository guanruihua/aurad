import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
	name: 'chart',
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
		{
			name: 'XYCoordinate',
			path: '/chart/xyCoordinate',
			element: Lazy(import('../coordinate/demo')),
		}
	]
} as MenuObject