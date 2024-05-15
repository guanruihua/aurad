import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
	name: 'animation',
	path: '/animation',
	children: [
		// {
		// 	name: 'flow',
		// 	path: '/chart/flow',
		// 	children: [
		// 		{
		// 			name: 'grid',
		// 			path: '/chart/flow/grid',
		// 			element: Lazy(import('../flow/demo/grid')),
		// 		},
		// 		{
		// 			name: 'Circular',
		// 			path: '/chart/flow/circular',
		// 			element: Lazy(import('../flow/demo/circular')),
		// 		},
		// 	],
		// },
		{
			name: 'textStroke',
			path: '/animation/textStroke',
			element: Lazy(import('../textStroke/demo')),
		},
	]
} as MenuObject