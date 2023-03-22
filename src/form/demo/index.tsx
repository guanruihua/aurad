import React from "react"
import TestFormFunc from './FCTest'
import TestFormClass from './classTest'

export default function FormTestPage() {

	return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
		<div>
			<h2>Class Component</h2>
			<TestFormClass />
		</div>
		<div>
			<h2>Function Component</h2>
			<TestFormFunc />
		</div>
	</div>
}
