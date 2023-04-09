/* eslint-disable*/
import { useSetState } from '@/assets'
import type { UseSetState } from '@/assets'
import type { ItemProps as FormItemProps } from '../item'
import type { FormRecord, UseForm } from '../type'
import { isEffectArray, isEmpty, isString, isUndefined } from 'asura-eye'
import { ObjectType } from "abandonjs"

type FieldStatusRecord = Record<string, {
	errorStatus: boolean
	errorMsg: any
}>


export function useForm(): UseForm {

	const rulesRecord: Record<string, any[]> = {}

	const useValue = useSetState<FormRecord>({})
	const [fields, setFields] = useSetState<ObjectType<Partial<FormItemProps>>>({})

	const [validStatus, setValidStatus, resetErrorStatus] = useSetState<FieldStatusRecord>({})

	const register = (name: string, props: Partial<FormItemProps>) => {
		const { rules = [] } = props
		setFields({ [name]: props })

		if (isString(name) && isEffectArray(rules)) {
			rulesRecord[name] = rules
		}
	}

	const [values, setValues]: UseSetState<FormRecord> = useValue

	const setFieldValue = (fieldName: string, value: any) => {
		validateField(fieldName, value)
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
			return record
		}

		return values
	}

	const validateField = (fieldName: string, value: any) => {

		if (isEmpty(value) || (isString(value) && value.trim() === '')) {
			setValidStatus({
				[fieldName]: {
					errorStatus: true,
					errorMsg: '不可以为空'
				}
			})
			return
		}

		setValidStatus({
			[fieldName]: {
				errorStatus: false,
				errorMsg: ''
			}
		})
	}

	const validateFieldValue = (fieldName: string) => {
		validateField(fieldName, values[fieldName])
		return values[fieldName]
	}

	const validateFieldsValue = (fieldNames?: string[]) => {
		const record: FormRecord = {}
		if (isEffectArray(fieldNames)) {
			fieldNames.forEach(name => {
				record[name] = values[name]
			})
			return record
		}

		if (isUndefined(fieldNames)) {
			Object.keys(fields).forEach(name => {
				validateField(name, values[name])
			})
		}
		return values
	}

	return {

		fields,
		register,

		validStatus,
		setValidStatus,
		resetErrorStatus,

		useValue,

		getFieldsValue,
		getFieldValue,

		setFieldValue,
		setFieldsValue,

		validateField,
		validateFieldValue,
		validateFieldsValue,
	}
}