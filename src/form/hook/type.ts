import { RefObject } from "react"
import { FormElementValue } from '../type'
import { ObjectType } from 'abandonjs'
import type { UseSetState } from '@/assets'
import type { FormRecord } from '../type'
/**
 * @description useForm 和 useClassForm 类型
 */
export interface UseForm extends ObjectType {
	/**
	 * Form Ref
	 */
	ref: RefObject<HTMLFormElement>

	useValue: UseSetState<FormRecord>
	/**
	 * @description 获取字段值
	 * @param fieldName {name} 字段名
	 * @returns {FormElementValue | FormElementValue[]} 字段值
	 */
	getFieldValue: (fieldName: string) => FormElementValue | FormElementValue[]
	/**
	 * @description 获取多个字段值, 不填获取全部
	 * @param fieldNames {?string[]} 字段名
	 * @returns {Record<string, FormElementValue | FormElementValue[]} 字段值
	 */
	getFieldsValue: (fieldNames?: string[]) => Record<string, FormElementValue | FormElementValue[]>
	/**
	 * @description 设单个值
	 * @param fieldName {string} 字段名
	 * @param value {any} 值
	 */
	setFieldValue: (fieldName: string, value: any) => void
	/**
	 * @description 设多个值
	 * @param record {Record<string, any | Record<string, any>}  字段名和值的集合
	 */
	setFieldsValue: (record: FormRecord) => void
	// setFieldsValue: (record: Record<string, any | Record<string, any>>) => boolean
}