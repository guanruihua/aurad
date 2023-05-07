import React from "react"
import { Space } from '..'
import { Direction, type Align } from '../../type'
import { Radio } from '@/form'
import { Waterfall } from '../../waterfall'
import { Unit } from "unit-testing-react"
import { RDS } from '@/demo'

export default function () {

	const [align, setAlign] = React.useState<Align>('start')
	const [layout, setLayout] = React.useState<Direction>('vertical')

	return <Waterfall count={1} sm={2} >
		<Unit title="Space(default)">
			<Space gap={10}>
				<RDS count={20} />
			</Space>
		</Unit>
		<Unit title="Space(custom align)">
			<Space style={{ marginBottom: 10 }}>
				<Radio.Group
					type="button"
					defaultValue={'start'}
					options={['start', 'end', 'center', 'between', 'around']}
					onChange={(value: Align) => {
						setAlign(value)
					}}
				/>
			</Space>
			<Space align={align}>
				<RDS count={20} />
			</Space>
		</Unit>
		<Unit title="Space(custom layout)">
			<Space style={{ marginBottom: 10 }}>
				<Radio.Group
					type="button"
					defaultValue={'vertical'}
					options={['vertical', 'horizontal']}
					onChange={(value: Direction) => {
						setLayout(value)
					}}
				/>
			</Space>
			<Space gap={10} direction={layout}>
				<RDS count={5} />
			</Space>
		</Unit>
	</Waterfall >
}
