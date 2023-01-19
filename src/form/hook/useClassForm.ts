import { createRef, RefObject } from 'react'
import { setFieldValueHoc, setFieldsValueHoc, getFieldValueHoc, getFieldsValueHoc } from './util'
import { UseForm } from './type'

export function useClassForm(): UseForm {
	const ref: RefObject<HTMLFormElement> = createRef()

	const setFieldValue = setFieldValueHoc(ref)

	const setFieldsValue = setFieldsValueHoc(ref)

	const getFieldValue = getFieldValueHoc(ref)

	const getFieldsValue = getFieldsValueHoc(ref)

	return {
		ref,
		getFieldsValue,
		getFieldValue,
		setFieldValue,
		setFieldsValue,
	}
}