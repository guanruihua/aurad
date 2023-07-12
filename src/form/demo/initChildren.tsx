import React, { Fragment } from "react"
import { FormItem } from '..'
import { Input, Button, Card } from '../..'
import type { UseForm } from "../type"

export const initChildren = (form: UseForm) => {
	return <Fragment>
		<Card>
			<FormItem
				name="validate"
				label={'Label(validate)'}
				rules={[
					{ required: true, message: '不可以为空' }
				]}>
				<Input
					type='text'
					// defaultValue="1"
					onChange={(e: any) => {
						console.log(e.target.value)
					}} />
			</FormItem>
		</Card>

		<Card>
			<FormItem
				name="array"
				label={'Label(array)'}>
				<Input
					type='text'
					index={'0'}
					defaultValue="1"
					onChange={(e: any) => {
						console.log(e.target.value)
					}} />
			</FormItem>

			<FormItem name="array" label={'Label(array)'}>
				<Input
					defaultValue='2'
					index={'1'}
					type='text' onChange={(e: any) => {
						console.log(e.target.value)
					}} />
			</FormItem>

			<FormItem name="array" label={'Label(array)'}>
				<Input
					defaultValue='2'
					index={'2'}
					type='text' onChange={(e: any) => {
						console.log(e.target.value)
					}} />
			</FormItem>
			<Button
				onClick={() => {
					form.setValue('array', '1122')
					// form.setValue('array', '1122', '1')
				}}>
				set  Array Value
			</Button>
			<Button onClick={() => {
				console.log(form.getValue('array'));
			}}>
				get all Array Field value
			</Button>
			<Button onClick={() => {
				console.log(form.getValue('array'));
				// console.log(form.getValue('array', '1'));
			}}>
				get Array Field('1') value
			</Button>
			<Button
				onClick={() => {
					form.setValue('array', '1111')
				}}>
				set all Array Values
			</Button>
		</Card>

		<Card>
			<FormItem name="myName1" label={'Label(myName1)'}>
				<Input type='text'
					defaultValue="3"
					onChange={(e: any) => {
						console.log(e.target.value)
					}} />
			</FormItem>
			<FormItem name="myName2" label={'Label(myName2)'}>
				<Input defaultValue='4' type='text' />
			</FormItem>
			<FormItem name="myName3" label={'Label(myName3)'}>
				<Input type='text' defaultValue='5' />
			</FormItem>
		</Card>

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
						form.setValue('myName1', '456')
					}}>
					set Value
				</Button>
				<Button onClick={() => {
					form.setValues({
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
					console.log(
						form.getValues([]),
						form.getValues(['array']),
						form.getValue('array'),
					)
				}}>btn submit</Button>
			</div>
		</div>
	</Fragment>
}
