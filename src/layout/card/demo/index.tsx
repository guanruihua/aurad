import React from "react"
import { Card } from '..'
import { Container, Unit } from "unit-testing-react"

export default function () {
	return <Container columns={2}>
		<Unit title="Card">
			<Card
				header={'header'}
				footer={'footer'}
			>
				卡片内容
			</Card>
		</Unit>
		<Unit title="Card(no header)">
			<Card
				footer={'footer'}
			>
				卡片内容
			</Card>
		</Unit>
		<Unit title="Card(no footer)">
			<Card
				header={'header'}
			>
				卡片内容
			</Card>
		</Unit>
		<Unit title="Card(no header & no footer)">
			<Card>
				卡片内容
			</Card>
		</Unit>


	</Container>
}
