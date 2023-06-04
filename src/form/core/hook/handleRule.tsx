import { isEmpty, isString } from 'asura-eye'
import type { FieldStatusRecord } from './type'

export type HandleRuleProps = {
	value: any
}

export function handleRule(props: HandleRuleProps): FieldStatusRecord[string]{
	const { value } = props

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