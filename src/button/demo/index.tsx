import React from "react"
import { Button } from '..'

export default function ButtonPage() {
	return <div className="unit">
		<div>
			<Button type='primary' onClick={() => { console.log('primary'); }}>Primary</Button>
			<Button type='primary' disabled onClick={() => { console.log('primary disabled') }}>Primary(disabled)</Button>
		</div>
		<div>
			<Button type='text' onClick={() => { console.log('text') }}>Text</Button>
			<Button type='text' disabled onClick={() => { console.log('text disabled') }}>Text(disabled)</Button>
		</div>
		<div>
			<Button type='default' onClick={() => { console.log('default') }}>Default</Button>
			<Button type='default' disabled onClick={() => { console.log('default disabled') }}>Default(disabled)</Button>
		</div>
	</div>
}
