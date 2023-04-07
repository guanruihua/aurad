/* eslint-disable*/
import { RefObject, useCallback, useRef } from 'react'
import { useSetState } from '@/assets'
import type { UseSetState } from '@/assets'
import type { UseForm } from './type'
import type { FormRecord } from '../type'
import { isEffectArray } from 'asura-eye'

export function useForm(): UseForm {
	const ref: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null)

	const useValue = useSetState<FormRecord>({})
	const [values, setValues]: UseSetState<FormRecord> = useValue

	const setFieldValue = (fieldName: string, value: any) => {
		setValues({ [fieldName]: value })
	}

	const setFieldsValue = (record: FormRecord) => {
		setValues(record)
	}

	const getFieldValue = (fieldName: string) => {
		return values[fieldName]
	}

	const getFieldsValue = (fieldNames?: string[]) => {
		const record: FormRecord = {}
		if (isEffectArray(fieldNames)) {
			fieldNames.forEach(name => {
				record[name] = values[name]
			})
		}
		return values

	}

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
		useValue,
		getFieldsValue,
		getFieldValue,
		setFieldValue,
		setFieldsValue,
		validateFieldsValue,
		validateFieldValue,
	}
}