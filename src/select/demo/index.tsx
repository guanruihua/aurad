import React from "react"
import FormDemo from './form'
import SimpleDemo from './simple'
import MultDemo from './mult'

export default function SelectPage() {

	return <div style={{ background: '#fff', padding: 10 }}>
		<FormDemo />
		<SimpleDemo />
		<MultDemo />
	</div>
}
