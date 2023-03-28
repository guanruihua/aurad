{/* <input id="num" inputmode="numeric">
<input id="email" inputmode="email">
<input id="tel" inputmode="tel">
<input id="url" inputmode="url" type="url"> */}


/**
 颜色拾取器
<input type="color" value="#e0ffee" id="colorPicker">
<b>Current color code: <code id="colorCode"></code></b>

<script>
colorPicker.addEventListener("input", setColor);

function setColor() {
	body.style.backgroundColor = input.value;
	colorCode.innerHTML = input.value;
}
</script>
 */
import React from "react"
import { Input } from '..'
import { Container, Unit } from "unit-testing-react"
import { Space } from "@/layout"

export default function InputTestCmp() {
	return <Container>
		<Unit title="Input">
			<Space direction="vertical">
				<Input />
				<Input onChange={(e: any) => {
					console.log(e.target.value)
				}} />
			</Space>
		</Unit>

		<Unit title="Input(inline)">
			<Space>
				<Input style={{ width: 250 }} />
				<Input style={{ width: 250 }} onChange={(e: any) => {
					console.log(e.target.value)
				}} />
			</Space>
		</Unit>

		<Unit title="Input ( Label) ">
			<Space direction="vertical">
				<Input label='name' />
				<Input label='name' onChange={(e: any) => {
					console.log(e.target.value)
				}} />
			</Space>
		</Unit>
	</Container>
}
