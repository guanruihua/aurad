import React from "react"
import { Button } from '..'

export default function ButtonPage() {
	return <>
		<div>
			<Button type='primary' onClick={() => { console.log('primary'); }}>Primary</Button>
			<Button type='primary' disabled onClick={() => { console.log('primary disabled') }}>Primary(disabled)</Button>
		</div>
		<div>
			<Button type='dashed' onClick={() => { console.log('dashed') }}>Dashed</Button>
			<Button type='dashed' disabled onClick={() => { console.log('dashed disabled') }}>Dashed(disabled)</Button>
		</div>
		<div>
			<Button type='link' onClick={() => { console.log('link') }}>Link</Button>
			<Button type='link' disabled onClick={() => { console.log('link disabled') }}>Link(disabled)</Button>
		</div>
		<div>
			<Button type='text' onClick={() => { console.log('text') }}>Text</Button>
			<Button type='text' disabled onClick={() => { console.log('text disabled') }}>Text(disabled)</Button>
		</div>
		<div>
			<Button type='default' onClick={() => { console.log('default') }}>Default</Button>
			<Button type='default' disabled onClick={() => { console.log('default disabled') }}>Default(disabled)</Button>
		</div>
	</>
}
