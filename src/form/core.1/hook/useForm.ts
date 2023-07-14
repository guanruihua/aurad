import { useSetState } from '@/assets'
import type { UseSetState } from '@/assets'
import type { ItemProps as FormItemProps } from '../item'
import type { FormRecord, UseForm, FieldStatusRecord } from './type'
import { isArray, isEffectArray, isEmpty, isString, isUndefined } from 'asura-eye'
import type { ObjectType } from "abandonjs"
import { handleRule } from './handleRule'



export function useForm(): UseForm {

	const rulesRecord: Record<string, any[]> = {}

	// 值集合
	const useValue = useSetState<FormRecord>({})
	const [values, _setValues]: UseSetState<FormRecord> = useValue

	// 字段属性
	const [fields, setFields] = useSetState<ObjectType<Partial<FormItemProps>>>({})

	// 错误校验
	const [validStatus, setValidStatus, resetErrorStatus] = useSetState<FieldStatusRecord>({})

	// 注册组件
	const register = (name: string, props: Partial<FormItemProps>) => {
		if (!isString(name)) return;
		const { rules = [] } = props
		setFields({ [name]: props })
		if (isString(name) && isEffectArray(rules)) {
			rulesRecord[name] = rules
		}
	}

	// 设置值
	const setValue = (fieldName: string, value: any) => {
		setValues({ [fieldName]: value })
		validateField(fieldName, value)
	}

	// 设置多个值
	const setValues = (record: FormRecord) => {
		_setValues(record)
		for (const name in record) {
			validateField(name, record[name])
		}
	}

	// 获取值
	const getValue = (fieldName: string) => {
		return values[fieldName]
	}

	// 获取多个值
	const getValues = (fieldNames?: string[]) => {
		const record: FormRecord = {}

		if (isEffectArray(fieldNames)) {
			fieldNames.forEach(name => {
				record[name] = values[name]
			})
			return record
		}

		return values
	}

	// 校验单个值
	const validateField = (fieldName: string, value?: any) => {
		let errorRecord: FieldStatusRecord = {}

		if (isEmpty(value)) value = values[fieldName] || undefined

		errorRecord[fieldName] = handleRule({ fieldName, value, rulesRecord })
		setValidStatus(errorRecord)
		
		return
	}

	// 校验多个值
	const validateFields = (fieldNames?: string[]) => {
		const record: FormRecord = {}
		if (isArray(fieldNames)) {
			fieldNames.forEach(name => {
				record[name] = values[name]
				validateField(name)
			})
			return record
		}

		if (isUndefined(fieldNames)) {
			Object.keys(fields).forEach(name => validateField(name))
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

		getValues,
		getValue,

		setValue,
		setValues,

		validateField,
		validateFields,
	}
}