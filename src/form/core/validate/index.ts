import { isEmpty, isString } from 'asura-eye'
import type { FieldStatusRecord } from '../hook/type'
import { ObjectType } from 'abandonjs'

// mode = 'all' | number // 指定找到数量错误就停止
export const validateField = (fieldName: string, value: any, rules: any[] = [], config: ObjectType = {}) => {
	const { mode = 'all' } = config
	// console.log(rules)
	const result: {
		name: string,
		value: any,
		error: any[]
	} = { name: fieldName, value, error: [] }
	for (let i = 0; i < rules.length; i++) {
		const rule = rules[i]
		const { required = false, min=0, max, pattern, len, transform, message, type, warningOnly=false, whitespace=false } = rule
		if (required) {
			if (isEmpty(value) || (isString(value) && value.length === 0)) {
				result.error.push('不可以为空')
				return result
			}
		}
		console.log(rule)
	}
	return result
}