import { ObjectType } from 'abandonjs'
import { ReactNode } from 'react'

export type FormRecord = ObjectType<any>

export type FieldStatusRecord = Record<string, {
	errorStatus: boolean
	errorMsg: any
}>

export interface FormAction {
	values: FormRecord
	setValues: (newValues: FormRecord) => void
}

export interface FormRule {
	required?: boolean
}

/**
 * @description Form 单元 值
 */
// export type FormFieldValue = undefined | null | string | number 
export type FormFieldValue = any


export interface MapAction<Key, Value> {
	set: (key: Key, value: Value, force?: boolean) => void;
	setAll: (newMap: Iterable<readonly [Key, Value]>, force?: boolean) => void;
	remove: (key: Key) => void;
	reset: (force?: boolean) => void;
	get: (key: Key) => Value | undefined;
}

/**
 * @description useForm 和 useClassForm 类型
 */
export interface UseForm extends ObjectType {

	values: ObjectType
	initialValues: ObjectType
	fields: Map<string | number, ObjectType>
	fieldAction: MapAction<string, ObjectType>
	setInitialValues(params: ObjectType<any>): void
	errorState: ObjectType
	setErrorState(params: ObjectType<any>): void
	rules: Map<string | number, any[]>
	ruleAction: MapAction<string, any[]>

	/**
	 * @description 获取字段值
	 * @param fieldName {name} 字段名
	 * @returns {FormFieldValue | FormFieldValue[]} 字段值
	 */
	getValue: (fieldName: string) => FormFieldValue
	/**
	 * @description 获取多个字段值, 不填获取全部
	 * @param fieldNames {?string[]} 字段名
	 * @returns {Record<string, FormFieldValue | FormFieldValue[]} 字段值
	 */
	getValues: (fieldNames?: string[]) => Record<string, FormFieldValue | FormFieldValue[]>
	/**
	 * @description 设单个值
	 * @param fieldName {string} 字段名
	 * @param value {any} 值
	 */
	setValue: (fieldName: string, value: any) => void
	/**
	 * @description 设多个值
	 * @param record {Record<string, any | Record<string, any>}  字段名和值的集合
	 */
	setValues: (record: FormRecord) => void

	validateFields: (fieldNames?: string[]) => FormRecord
	validateField(fieldName: string, value: any): FormRecord
	resetFields: (fieldNames?: string[]) => void

	resetErrorStatus: (fieldNames?: string[]) => void
}

export type FormField = {
	/**
	 * @description 默认值
	 */
	defaultValue?: FormFieldValue
	/**
	 * @description 初始化值
	 */
	initialValue?: FormFieldValue
	/**
	 * @description 值
	 */
	value?: FormFieldValue
	/**
	 * 校验规则
	 */
	rules?: Rule[]

}

type ValidateTrigger = 'onChange' | 'onFocus' | 'onBlur' | string

export type Rule = {
	/**
	 * @description 仅在 type 为 array 类型时有效，用于指定数组元素的校验规则	rule
	 */
	defaultField?: Rule[]
	/**
	 * @description	是否匹配枚举中的值（需要将 type 设置为 enum）	any[]	
	 */
	enum?: any[]
	/**
	 * @description 仅在 type 为 array 或 object 类型时有效，用于指定子元素的校验规则	Record<string, rule>	
	 */
	fields?: Record<string, Rule> | unknown[]
	/** 
	 * @description string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度	number	
	 */
	len?: number | string | unknown[]
	/**
	 * @description 必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度	number	
	 */
	max?: number | string | unknown[]
	/**
	 * @description 错误信息，不设置时会通过模板自动生成	
	 * @type string	| ReactNode
	 */
	message?: string | ReactNode,
	/**
	 * @description 必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度	number	
	 */
	min?: number | string | unknown[],
	/**
	 * @description 正则表达式匹配	RegExp	
	 * @pre type = 'string'
	 */
	pattern?: RegExp
	/**
	 * @description 是否为必选字段	boolean	
	 */
	required?: boolean,
	/**
	 * @description 将字段值转换成目标值后进行校验(value) => any
	 */
	transform?: (value: any) => any,
	/**
	 * @description 类型限制
	 * @default 'string'
	 * @type: 'string' | 'number' | 'boolean' | 'url' | 'email' | 'regexp' | 'integer' | 'float' | 'array' | 'object' | 'date'
	 */
	type?: 'string' | 'number' | 'boolean' | 'url' | 'email' | 'regexp' | 'integer' | 'float' | 'array' | 'object' | 'date'
	/**
	 * @description 设置触发验证时机，必须是 Form.Item 的 validateTrigger 的子集	
	 * @type ValidateTrigger | ValidateTrigger[]	
	 */
	validateTrigger?: ValidateTrigger | ValidateTrigger[],
	/**
	 * @description 自定义校验，接收 Promise 作为返回值
	 * @type (rule, value) => Promise<boolean>
	 */
	validator?: (rule: Rule, value: any) => Promise<boolean>,
	/**
	 * @description 仅警告，不阻塞表单提交	
	 * @type boolean
	 * @default false
	 */
	warningOnly?: boolean,
	/**
	 * @description 如果字段仅包含空格则校验不通过，只在 type: 'string' 时生效	
	 * @type boolean
	 * @default false
	 */
	whitespace?: boolean,
}

export interface UseFormProps {
	fields?: FormField[]
}