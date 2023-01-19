import React, { Fragment } from "react"
import { Form, UseForm } from '..'
import { Input, Button } from '../..'

export const initChildren = (form: UseForm) => {
	return <Fragment>
		<Form.Item
			name="array"
			label={'Label(array)'}
			rules={[
				
			]}>
			<Input
				type='text'
				index={'0'}
				defaultValue="1"
				onChange={(e: any) => {
					console.log(e.target.value)
				}} />
		</Form.Item>

		<Form.Item name="array" label={'Label(array)'}>
			<Input
				defaultValue='2'
				index={'1'}
				type='text' onChange={(e: any) => {
					console.log(e.target.value)
				}} />
		</Form.Item>

		<Form.Item name="array" label={'Label(array)'}>
			<Input
				defaultValue='2'
				index={'2'}
				type='text' onChange={(e: any) => {
					console.log(e.target.value)
				}} />
		</Form.Item>

		<Form.Item name="myName1" label={'Label(myName1)'}>
			<Input type='text'
				defaultValue="3"
				onChange={(e: any) => {
					console.log(e.target.value)
				}} />
		</Form.Item>
		<Form.Item name="myName2" label={'Label(myName2)'}>
			<Input defaultValue='4' type='text' />
		</Form.Item>
		<Form.Item name="myName3" label={'Label(myName3)'}>
			<Input type='text' defaultValue='5' />
		</Form.Item>
		<div>
			<Button htmlType="submit">Submit</Button>
			<Button htmlType="reset">Reset</Button>
		</div>
		<div style={{
			display: 'grid',
			gridTemplateColumns: '1fr 1fr'
		}}>
			<div>
				<h4>Set Value</h4>
				<Button
					onClick={() => {
						form.setFieldValue('array', '1111')
					}}>
					set all Array Values
				</Button>
				<Button
					onClick={() => {
						form.setFieldValue('array', '1122', '1')
					}}>
					set  Array Value
				</Button>
				<Button
					onClick={() => {
						form.setFieldValue('myName1', '456')
					}}>
					set Value
				</Button>
				<Button onClick={() => {
					form.setFieldsValue({
						array: {
							'1': '1111',
							'2': '2222'
						},
						myName1: '456'
					})
				}}>
					set Values
				</Button>
			</div>

			<div>
				<h4>Get Value</h4>
				<Button onClick={() => {
					console.log(form.getFieldValue('array'));
				}}>
					get all Array Field value
				</Button>
				<Button onClick={() => {
					console.log(form.getFieldValue('array', '1'));
				}}>
					get Array Field('1') value
				</Button>
				<Button onClick={() => {
					console.log(
						form.getFieldsValue([]),
						form.getFieldsValue(['array']),
						form.getFieldValue('array'),
					)
				}}>btn submit</Button>
			</div>
		</div>
	</Fragment>
}
