import React from "react"
import { Container, Unit } from "unit-testing-react"
import { Input, InputChangeEvent, InputNumber } from '@/form'
import { Table } from "@/dataGraph"

export default function InputTestCmp() {

	const [value, setValue] = React.useState<string>('value')

	return (<Container columns={1} title="Input">
		<InputNumber />
	</Container>)
}
