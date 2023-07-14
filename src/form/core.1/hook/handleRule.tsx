import { isEmpty, isString } from 'asura-eye'
import type { FieldStatusRecord } from './type'
import { ObjectType } from 'abandonjs'

export type HandleRuleProps = {
	fieldName: string
	value: any
	rulesRecord: ObjectType<any[]>
}

export function handleRule(props: HandleRuleProps): FieldStatusRecord[string] {
	const { value, rulesRecord } = props


	if (
		isEmpty(value) ||
		(isString(value) && value.trim() === '')
	) {
		return {
			errorStatus: true,
			errorMsg: '不可以为空'
		}
	}

	return {
		errorStatus: false,
		errorMsg: null
	}
}