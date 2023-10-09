import React from "react"
import { Waterfall } from ".."
import { RDS } from "@/demo"
import { Unit } from 'unit-testing-react'

export default function () {
	return <Waterfall>
		<Unit>
			<Waterfall.Item title="Waterfall(default)">
				<Waterfall count={5}>
					<RDS count={50} style={{ width: '100%' }} />
				</Waterfall>
			</Waterfall.Item>
		</Unit>
		<Unit>
			<Waterfall.Item title="Waterfall">
				<Waterfall count={5}>
					<RDS count={50} style={{ width: '100%' }} />
				</Waterfall>
			</Waterfall.Item>
		</Unit>
	</Waterfall>
}
