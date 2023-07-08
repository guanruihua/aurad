import React from "react"
import { Container, Unit } from 'unit-testing-react'
import './index.less'
import { BorderFusion } from '..'

export default function () {
	return (
		<Container>
			<Unit title="Border Fusion">
				<BorderFusion style={{
					background: '#eee'
				}}>
					<div className="box1"> aaaa </div>
					<div className="box2"> bbbb </div>
				</BorderFusion>
			</Unit>
		</Container>
	)
}
