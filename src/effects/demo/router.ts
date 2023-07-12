import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"

export default {
		name: 'Effects',
		path: '/effect',
		children: [
			{
				name: 'Border Fusion',
				path: '/effect/fusion',
				element: Lazy(import('../border/demo')),
			},
		]
} as MenuObject