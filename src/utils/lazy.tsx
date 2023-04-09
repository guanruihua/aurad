import React, { Suspense, lazy } from 'react'

/**
 * 
 * @param component {Promise<{ default: React.ComponentType<any> }>}
 * @param loading {React.ReactNode = <div>Loading</div> } loading 组件
 * @returns 
 */
export function Lazy(component: Promise<{ default: React.ComponentType<any> }>, loading: React.ReactNode = <div>Loading</div>) {
	return <Suspense fallback={loading}>
		{React.createElement(lazy(() => component))}
	</Suspense>
}