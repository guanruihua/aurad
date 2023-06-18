import React from "react"
import { Slider } from ".."
import { Container, Unit } from "unit-testing-react"

export default function () {
	const [value, setValue] = React.useState(0)
	return <Container>
		<Unit>
			<div>
				{value}
			</div>
			<br />
			<Slider
				min={1}
				max={100}
				onChange={(value: any) => {
					setValue(value)
				}}
			/>

			<br />
			<br />
			<br />
			<div className="au-slider-dev" >
				<div className="au-slider-dev-content" >
					<div />
				</div>
			</div>

		</Unit>
	</Container>
}
