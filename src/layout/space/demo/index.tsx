import React from "react"
import { Space, SpaceAlign } from '..'
import { Button } from '@/button'
import { Container, Unit } from "unit-testing-react"
import { Checkbox } from "@/checkbox"
import { Radio } from "@/radio"

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
		<Unit title="Space(align)">
			<Space style={{ marginBottom: 10 }}>
				<Radio.Group
					type="button"
					defaultValue={'start'}
					options={['start', 'end', 'center', 'between']}
					onChange={(value: SpaceAlign) => {
						setAlign(value)
					}}
				/>
			</Space>
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
		<Unit title="Space(vertical center)">
			<Space gap={10} direction="vertical" align="center">
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
			</Space>
		</Unit>
	</Container >
}
