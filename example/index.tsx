import React, { Suspense } from "react"
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useNavigate, useRoutes } from 'react-router-dom';
import { routers, menu, MenuObject } from './router'
import './index.less'

function App() {
	const element = useRoutes(routers)
	const nav = useNavigate()

	return (<div>
		<div style={{ position: 'fixed', bottom: 0, left: 0 }}>
			{menu.map((item: MenuObject) => {
				const { name, path } = item
				if (path) {
					return <div
						style={{
							display: 'inline-block',
							marginRight: 5,
							background: '#123123',
							color: '#fff',
							fontSize: 5,
							padding: 1
						}}
						key={name + path}
						onClick={() => {
							nav(path)
						}}
					>{name || path.replace('/', '')}
					</div>
				}
			})}
		</div>
		<Suspense fallback={<div>loading...</div>}>
			{element}
		</Suspense>
	</div>
	)
}

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
	<BrowserRouter basename="/">
		<App />
	</BrowserRouter>
);