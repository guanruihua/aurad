import { RefObject, useCallback, useRef } from 'react'
import { setFieldValueHoc, setFieldsValueHoc, getFieldValueHoc, getFieldsValueHoc } from './util'
import { UseForm } from './type'

export function useForm(): UseForm {
	const ref: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null)

	const setFieldValue = useCallback(setFieldValueHoc(ref), [ref.current])

	const setFieldsValue = useCallback(setFieldsValueHoc(ref), [ref.current])

	const getFieldValue = useCallback(getFieldValueHoc(ref), [ref.current])

	const getFieldsValue = useCallback(getFieldsValueHoc(ref), [ref.current])

	return {
		ref,
		getFieldsValue,
		getFieldValue,
		setFieldValue,
		setFieldsValue,
	}
}