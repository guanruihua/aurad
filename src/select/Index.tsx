import React from "react"

interface SelectProps {
	[key: string]: any
}

export function Select(props: SelectProps) {
	const { } = props
	return <div>
		<input list="magicHouses" id="myHouse" name="myHouse" placeholder="type here..." />
		<datalist id="magicHouses">
			<option value="Gryfindor" />
			<option value="Hufflepuff" />
			<option value="Slytherin" />
			<option value="Ravenclaw" />
			<option value="Horned Serpent" />
			<option value="Thunderbird" />
			<option value="Pukwudgie" />
			<option value="Wampus" />
		</datalist>
	</div>
}
