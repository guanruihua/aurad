import { isArray, isBoolean, isDate, isEmpty, isFloat, isInteger, isNumber, isObject, isRegExp, isString } from "asura-eye"
import { Rule } from "./type"
import { checkRequired, getNum } from './util'

export const checkValueByRule = (value: any, rule: Rule) => {
	const { required = false, min, max, pattern, len, transform, type, whitespace = false } = rule
	let newValue = transform ? transform(value) : value

	if (required && checkRequired(newValue) === false) return false


	const valueLen = getNum(newValue)

	if (!isEmpty(min)) {
		if (valueLen === null) return false
		const minLen = getNum(min)
		if (minLen !== null && valueLen < minLen) return false
	}

	if (!isEmpty(max)) {
		if (valueLen === null) return false
		const maxLen = getNum(max)
		if (maxLen !== null && valueLen > maxLen) return false
	}


	if (!isEmpty(len)) {
		if (valueLen === null) return false
		const newLen = getNum(len)
		if (newLen !== null && valueLen !== newLen) return false
	}


	if (type === 'string') {
		if (!isString(newValue)) return false
		if (whitespace) {
			if (newValue.indexOf(' ') > -1) return false
		}

		if (pattern && isRegExp(pattern)) {
			if (!pattern.test(newValue)) return false
		}
	}

	if (type === 'number' && !isNumber(newValue)) return false
	if (type === 'boolean' && !isBoolean(newValue)) return false
	if (type === 'regexp' && !isRegExp(newValue)) return false
	if (type === 'float' && !isFloat(newValue)) return false
	if (type === 'array' && !isArray(newValue)) return false
	if (type === 'object' && !isObject(newValue)) return false
	if (type === 'date' && !isDate(newValue)) return false
	if (type === 'integer' && !isInteger(newValue)) return false

	if (type === 'email') {
		if (!isString(newValue)) return false
		if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(newValue))
			return false
	}
	if (type === 'url') {
		if (!isString(newValue)) return false
		if (/https?\/\/:[-a-z0-9]+(\.[-a-z0-9])*\.(com|cn|edu|uk)\/[-a-z0-9_:@&?=+,.!/~*'%$]*/.test(newValue))
			return false
	}

	return true
}