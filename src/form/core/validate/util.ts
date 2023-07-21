import { isArray, isEmpty, isNumber, isString } from "asura-eye"

export const checkRequired = (value: unknown) => {
	if (isEmpty(value)) return false
	if ((isString(value) && value.length === 0)) return false
	return true
}

export const getNum = (value: number | string | unknown[]) => {
	if (isNumber(value)) return value
	if (isString(value) || isArray(value)) return value.length
	return null
}