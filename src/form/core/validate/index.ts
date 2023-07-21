import { ObjectType, isNumber } from 'abandonjs'
import { checkValueByRule } from './check'

// mode = 'all' | number // 指定找到数量错误就停止
export const validateField = (fieldName: string, value: any, rules: any[] = [], config: ObjectType = {}) => {

	const { mode = 'all' } = config

	const result: {
		name: string,
		value: any,
		error: any[],
	} = { name: fieldName, value, error: [] }
	let maxLen = isNumber(mode) ? mode : -1
	for (let i = 0; i < rules.length; i++) {
		const rule = rules[i]
		if (checkValueByRule(value, rule)) {
			if (maxLen === -1) {
				continue;
			} else {
				if (maxLen === 0) return result;
				--maxLen;
			}
		} else {
			result.error.push(rule.message)
		}
	}
	return result
}