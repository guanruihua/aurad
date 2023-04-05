import React, { useState } from "react"
import { Input, InputChangeEvent } from '@/input'
import { Container, Unit } from "unit-testing-react"
import { Button } from "@/button"

export default function () {

	const [value, setValue] = useState<string>('value1')

	return <Container>
		<Unit title="Input set value">
			<Input
				value={value}
				onChange={(e: InputChangeEvent) => {
					setValue(e.target.value)
				}}
			/>
			<Button type="primary" onClick={() => setValue('new Value')}>set value(new Value)</Button>
		</Unit>
		<Unit title="Input set defaultValue">
			<Input defaultValue="value2" />
		</Unit>
	</Container>
}
