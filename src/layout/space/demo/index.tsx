import React from "react"
import { Space, SpaceAlign } from '..'
import { Button } from '@/button'
import { Container, Unit } from "unit-testing-react"

export default function () {

	const [align, setAlign] = React.useState<SpaceAlign>('start')

	return <Container>
		<Unit title="Space">
			<Space gap={10}>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
			</Space>
		</Unit>
		<Unit title="Space">
			<Space align={align}>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
			</Space>
		</Unit>
	</Container>
}
