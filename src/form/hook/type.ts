import { RefObject } from "react"
import { FormElementValue } from '../type'
import { ObjectType } from 'abandonjs'

/**
 * @description useForm 和 useClassForm 类型
 */
export interface UseForm extends ObjectType {
	/**
	 * Form Ref
	 */
	ref: RefObject<HTMLFormElement>
	/**
	 * @description 获取字段值
	 * @param fieldName {name} 字段名
	 * @param fieldIndex {?:string} 同名字段来指定唯一标识, 反之全获取
	 * @returns {FormElementValue | FormElementValue[]} 字段值
	 */
	getFieldValue: (fieldName: string, fieldIndex?: string) => FormElementValue | FormElementValue[]
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
	 * @param fieldIndex {?:string} 同名字段来指定唯一标识, 反之全获取
	 * @returns {boolean} 设值错误会返回false, 反之为true
	 */
	setFieldValue: (fieldName: string, value: any, fieldIndex?: string) => boolean
	/**
	 * @description 设多个值
	 * @param record {Record<string, any | Record<string, any>}  字段名和值的集合
	 * @returns {boolean} 有设值错误会返回false, 反之为true
	 */
	setFieldsValue: (record: Record<string, any | Record<string, any>>) => boolean
}