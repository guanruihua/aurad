import React from "react"
import { Button } from '..'

export default function ButtonPage() {
	return <div>
		<Button type='primary' onClick={() => { console.log('primary') }}>primary</Button>
		<Button type='ghost' onClick={() => { console.log('ghost') }}>ghost</Button>
		<Button type='dashed' onClick={() => { console.log('dashed') }}>dashed</Button>
		<Button type='link' onClick={() => { console.log('link') }}>link</Button>
		<Button type='text' onClick={() => { console.log('text') }}>text</Button>
		<Button type='default' onClick={() => { console.log('default') }}>default</Button>
	</div>
}
