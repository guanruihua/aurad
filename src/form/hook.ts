/* eslint-disable*/
import { useCallback, useRef } from 'react';
// import {FormProps} from '.'

export function useForm() {
	const ref = useRef<HTMLFormElement>(null)
	// const form = ref.current

	const setFieldValue = useCallback((fieldName: string, value: any) => {

	}, [ref.current])

	const setFieldsValue = useCallback((record: { [fieldName: string]: any }) => {

	}, [ref.current])


	const getFieldValue = useCallback((fieldName: string) => {
		if (fieldName === undefined) return undefined;
		const result: Record<string, any> = {}
		const elements: HTMLFormControlsCollection | undefined = ref.current?.elements
		if (!elements) return;
		for (let item of elements) {
			const { name, value } = item as HTMLFormElement
			if (name === undefined || name == '' || name !== fieldName) continue;
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
	}, [ref.current])

	const getFieldsValue = useCallback((fieldNames?: string[]) => {
		const result: Record<string, any> = {}
		const elements: HTMLFormControlsCollection | undefined = ref.current?.elements
		if (!elements) return;
		for (let item of elements) {
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
	}, [ref.current])

	return {
		ref,
		getFieldsValue,
		getFieldValue,
		setFieldValue,
		setFieldsValue,
	}
}