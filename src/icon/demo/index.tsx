import React from "react"
import { Icon } from '..'
import { IconType, icons } from '../icons'
import { Space } from '@/layout'
import { Unit } from "unit-testing-react"

export default function () {
	return <Unit title="Icon">
		<Space>
			{Object.keys(icons).map((item: IconType) => {
				return <Icon key={item} type={item} />
			})}
		</Space>
	</Unit>
}