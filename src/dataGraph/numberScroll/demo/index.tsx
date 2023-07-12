import React from "react"
import { NumberScroll, SimpleNumberScroll } from '..'
import { Container, Unit } from "unit-testing-react"
import { useInterval } from "0hook"

export default function () {

	const [value, setValue] = React.useState(999)
	const [value2, setValue2] = React.useState(8)

	useInterval(() => {
		setValue(pv => pv + 1)

		// setValue2(pv => pv + 1) 
		// or
		setValue2(pv => pv === 9 ? 0 : pv + 1)
	}, 1000)

	return <Container>
		<Unit title="NumberScroll">
			<NumberScroll value={value} />
		</Unit>
		<Unit title="NumberScroll(自定义样式)">
			<NumberScroll
				rootStyle={{
					background: 'grey',
					padding: 10,
					borderRadius: 8,
					display: 'inline-grid'
				}}
				style={{
					background: '#108ee9'
				}}
				itemStyle={{
					color: '#fff'
				}}
				value={value} />
		</Unit>
		<Unit title="SimpleNumberScroll">
			<SimpleNumberScroll value={value2} />
		</Unit>
	</Container>
}
