import React from "react"
import { Button } from '../components'

export function ButtonPage() {
	return <div>
		<Button type="primary">btn</Button>
		<Button type='primary'>primary</Button>
		<Button type='ghost'>ghost</Button>
		<Button type='dashed'>dashed</Button>
		<Button type='link'>link</Button>
		<Button type='text'>text</Button>
		<Button type='default'>default</Button>
	</div>
}
