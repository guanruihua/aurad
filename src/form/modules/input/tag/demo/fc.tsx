import React from "react"
import { Container, Unit } from "unit-testing-react"
import { Input, InputChangeEvent } from '@/form'
import { InputTag } from ".."

export default function InputTestCmp() {

	const [value, setValue] = React.useState<string>('value')

	return (<Container columns={1} title="Input">
		<InputTag />
		<InputTag
			defaultValue={'a1,b2,c3,e4,f5'}
		/>
		<InputTag
			defaultValue={
				[
					{ id: '1', value: '1', label: '01' },
					{ id: '2', value: '2', label: '11' },
					{ id: '3', value: '3', label: '21' },
					{ id: '4', value: '4', label: '31' },
					{ id: '41', value: '41', label: '314141---------fasfasdjfkajskdfjaksdfkajsdfjakjsfjafjk' },
					// { id: '412', value: '412', label: '314141---------fasfasdjfkajskdfjaksdfkajsdfjakjsfjafjk333' },
				]
			}
		/>
	</Container>)
}
