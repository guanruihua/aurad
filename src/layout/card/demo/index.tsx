import React from "react"
import { Card } from '..'
import { Container, Unit } from "unit-testing-react"

export default function () {
	return <Container columns={1}>
		<Unit title="Card">
			<Card
				header={'title'}
				footer={'footer'}
			>
				卡片内容
			</Card>
		</Unit>
		<Unit title="Card(no title)">
			<Card
				footer={'footer'}
			>
				卡片内容
			</Card>
		</Unit>
		<Unit title="Card(no footer)">
			<Card
				header={'title'}
			>
				卡片内容
			</Card>
		</Unit>
		<Unit title="Card(no title & no footer)">
			<Card>
				卡片内容
			</Card>
		</Unit>


	</Container>
}
