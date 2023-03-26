import React from "react"
import { Icon } from '..'
import { IconType, icons } from '../icons'

export default function () {
	return <div className="unit">
		{Object.keys(icons).map((item: IconType) => {
			return <Icon key={item} type={item} />
		})}
	</div>
}