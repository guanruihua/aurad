import { useMap, useSetState } from '@/assets'
import { type ObjectType } from "abandonjs"
import { type UseForm } from './type'
import { useState } from 'react'
import { validateField } from '../validate'
import { isArray } from 'asura-eye'

export function useForm(): UseForm {

	const [fields, fieldAction] = useMap<string, ObjectType>([])
	const [rules, ruleAction] = useMap<string, any[]>([])

	const [initialValues, setInitialValues] = useState<ObjectType>({})
	const [values, setValues] = useSetState<ObjectType>({})
	const [errorState, setErrorState, resetErrorState] = useSetState<ObjectType>({})

	const allFieldNames: string[] = Array.from(fields.keys())

	// console.log(initialValues, values)

	return {
		fields, fieldAction,
		rules, ruleAction,
		initialValues, setInitialValues,
		values, setValues,
		errorState, setErrorState,
		setValue: (fieldName: string, value: any) => setValues({ [fieldName]: value }),
		getValue: (fieldName: string) => {
			return values[fieldName]
		},
		getValues: (fieldNames?: string[]) => {
			if (fieldNames) {
				const result: ObjectType = {}
				fieldNames.forEach(name => {
					result[name] = values[name]
				})
				return result
			} else {
				return values
			}
		},
		validateField: (fieldName: string, value: any) => {
			if (!allFieldNames.includes(fieldName)) return {}
			setErrorState({ [fieldName]: validateField(fieldName, value, ruleAction.get(fieldName)) })
			return {}
		},
		validateFields: (fieldNames?: string[]) => {
			const newErrorState: ObjectType = {}
			if (fieldNames) {
				fieldNames.forEach(name => {
					if (allFieldNames.includes(name)) {
						newErrorState[name] = validateField(name, values[name], ruleAction.get(name))
					}
				})
			} else {
				allFieldNames.forEach(name => {
					newErrorState[name] = validateField(name as string, values[name], ruleAction.get(name))
				})
			}
			setErrorState(newErrorState)
			return {}
		},
		resetFields: (fieldNames?: string[]) => {
			resetErrorState(fieldNames)
			if (fieldNames && isArray(fieldNames)) {
				const newValues: ObjectType = {}
				fieldNames.forEach((name: string) => {
					newValues[name] = initialValues[name]
				})
				setValues(newValues, true)
			} else {
				setValues(initialValues, true)
			}
		},
		resetErrorStatus: (fieldNames?: string[]) => {
			resetErrorState(fieldNames)
		}
	}
}