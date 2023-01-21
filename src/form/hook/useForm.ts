import { RefObject, useCallback, useRef } from 'react'
import { setFieldValueHoc, setFieldsValueHoc, getFieldValueHoc, getFieldsValueHoc } from './util'
import { UseForm } from './type'

export function useForm(): UseForm {
	const ref: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null)

	const setFieldValue = useCallback(setFieldValueHoc(ref), [ref.current])

	const setFieldsValue = useCallback(setFieldsValueHoc(ref), [ref.current])

	const getFieldValue = useCallback(getFieldValueHoc(ref), [ref.current])

	const getFieldsValue = useCallback(getFieldsValueHoc(ref), [ref.current])

	const validateFieldValue = useCallback(() => {
		const elements: HTMLFormControlsCollection | undefined = ref.current?.elements
		console.log(elements)
	}, [ref.current])

	const validateFieldsValue = useCallback(() => {
		const elements: HTMLFormControlsCollection | undefined = ref.current?.elements
		console.log(elements)
	}, [ref.current])

	return {
		ref,
		getFieldsValue,
		getFieldValue,
		setFieldValue,
		setFieldsValue,
		validateFieldsValue,
		validateFieldValue,
	}
}