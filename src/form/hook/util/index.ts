/* eslint-disable*/
import { RefObject } from 'react'
import { isObject } from 'abandonjs'
// import { FormElementValue } from '../../type'

export const getFieldValueHoc = (ref: RefObject<HTMLFormElement>) => (fieldName: string, fieldIndex?: string) => {
	if (fieldName === undefined) return undefined;
	const result: Record<string, any> = {}
	const elements: HTMLFormControlsCollection | undefined = ref.current?.elements
	if (!elements) return;
	for (const item of elements) {
		const { name, value } = item as HTMLFormElement
		const index: string | null = item.getAttribute('index')
		if (name === undefined || name == '' || name !== fieldName) continue;
		if (fieldIndex === index) {
			return value
		}
		if (Array.isArray(result[name])) {
			result[name].push(value)
			continue;
		}
		if (result[name]) {
			result[name] = [result[name], value]
			continue;
		}
		result[name] = value
	}
	return result[fieldName]
}

export const getFieldsValueHoc = (ref: RefObject<HTMLFormElement>) => (fieldNames?: string[]) => {
	const result: Record<string, any> = {}
	const elements: HTMLFormControlsCollection | undefined = ref.current?.elements
	if (!elements) return {};
	for (const item of elements) {
		const { name, value } = item as HTMLFormElement
		if (name === undefined || name == '') continue;
		if (fieldNames && fieldNames.length > 0 && !fieldNames.includes(name)) continue;
		if (Array.isArray(result[name])) {
			result[name].push(value)
			continue;
		}
		if (result[name]) {
			result[name] = [result[name], value]
			continue;
		}
		result[name] = value

	}
	return result
}

export const setFieldValueHoc = (ref: RefObject<HTMLFormElement>) =>
	(fieldName: string, value: any, fieldIndex?: string): boolean => {
		if (ref === null) return false
		const elements: HTMLFormControlsCollection | undefined = ref.current?.elements
		let result = false
		if (!elements) return false;
		for (const item of elements) {
			const { name = '' } = item as HTMLFormElement
			const index: string | null = item.getAttribute('index')
			if (name == '' || name !== fieldName) continue;
			try {
				if (fieldIndex !== undefined) {
					if (index !== null && fieldIndex === index) {
						(item as HTMLFormElement).value = value
						result = true
					}
					continue;
				}
				(item as HTMLFormElement).value = value
				result = true
				continue;
			} catch (error) {
				return false
			}
		}
		return result
	}

export const setFieldsValueHoc = (ref: RefObject<HTMLFormElement>) => (record: { [fieldName: string]: any | Record<string, any> }): boolean => {
	const elements: HTMLFormControlsCollection | undefined = ref.current?.elements
	if (!elements) return false;
	for (const item of elements) {
		const { name = '' } = item as HTMLFormElement
		const index: string | null = item.getAttribute('index')
		if (name == '' || record[name] === undefined) continue;
		try {
			const value = record[name];
			if (index !== null && isObject(value)) {
				for (const unit in value)
					if (unit === index)
						(item as HTMLFormElement).value = value[unit]
				continue;
			}
			(item as HTMLFormElement).value = value
		} catch (error) {
			return false
		}
	}
	return true
}

