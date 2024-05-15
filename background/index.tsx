import React from 'react'
import { createRoot } from 'react-dom/client'
// // import { Button, Tab } from '../dist/index.mjs'
// import { Button, Tab } from '../dist/index.js'
// import '../dist/style.css'
// // import a, { Button } from '../dist/index.js'

// function App() {
//   // console.log(Button)
//   // console.log(a, Button)
//   return (
//     <div>
//       <Button type='primary'>123</Button>
//       {/* <Tab /> */}
//       <Tab
//         items={[
//           { title: 'title1', key: '1', children: 'content1' },
//           { title: 'title2', key: '2', children: 'content2' }
//         ]}
//       />
//       {/* <Tab items={[{ title: '1', key: '1', children: '1' }]} /> */}
//     </div>
//   )
// }
import './index.less'
import { BrowserContainer, Icon, Lazy, type MenuObject } from '../src'

import chartRoute from '../src/chart/demo/router'
import formRoute from '../src/form/demo/router'
import dataGraphRoute from '../src/dataGraph/demo/router'
import msgRoute from '../src/message/demo/router'
import layoutRoute from '../src/layout/demo/router'
import animationRoute from '../src/animation/demo/router'
// import dragRoute from '../src/drag/demo/router'
// import feedbackRoute from '../src/feedback/demo/router'
// import DemoRoute from '../src/demo/demo/router'
import { Menu } from "./home"

const modules: MenuObject[] = [
	{
		name: 'Icon',
		path: '/icon',
		icon: <Icon size={24} type="icon" />,
		element: Lazy(import(`../src/icon/demo`))
	},
	chartRoute,
	formRoute,
	dataGraphRoute,
	msgRoute,
	layoutRoute,
	animationRoute,
	// dragRoute,
	// feedbackRoute,
	// DemoRoute,
]

const menu: MenuObject[] = [
	{
		path: '/',
		name: 'home',
		element: <Menu
			fold={localStorage.fold === 'true'}
			menu={[{
				path: '/',
				name: 'home',
				children: modules,
			}]} />,
		children: modules,
	}
]

function App() {
	return <BrowserContainer
		menu={menu}
	/>
}

createRoot(document.getElementById('root')!).render(<App />)
