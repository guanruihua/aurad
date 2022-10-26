import React from "react"

export interface VRouterProps {
	[key: string]: any
}
/**
 * @description 待开发
 * @param props 
 * @returns 
 */
export function VRouter(props: VRouterProps){
	return <div>
		VRouter
		{JSON.stringify(Object.keys(props))}
	</div>
}
