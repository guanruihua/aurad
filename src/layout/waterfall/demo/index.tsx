import React from "react"
import { Waterfall } from ".."
import { RDS } from "@/demo"
// import { Container, Unit } from 'unit-testing-react'

export default function () {
	return <Waterfall>
		<Waterfall.Item title="Waterfall(default)">
			<Waterfall count={5}>
				<RDS count={100} style={{ width: '100%' }} />
			</Waterfall>
		</Waterfall.Item>
		<Waterfall.Item title="Waterfall">
			<Waterfall count={5}>
				<RDS count={100} style={{ width: '100%' }} />
			</Waterfall>
		</Waterfall.Item>
	</Waterfall>
}