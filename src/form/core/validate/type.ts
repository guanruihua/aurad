import React from "react"

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
	message?: string | React.ReactNode,
	/**
	 * @description 必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度	number	
	 */
	min?: number | string | unknown[],
	/**
	 * @description 正则表达式匹配	RegExp	
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
	 * @description 类型，有 string | number | boolean | url | email | regexp |  integer | float | array | object | enum | date | url | hex | any
	 * @default string
	 * @type: 'string' | 'number' | 'boolean' | 'url' | 'email' | 'regexp' | 'integer' | 'float' | 'array' | 'object' | 'enum' | 'date' | 'url' | 'hex' | any
	 */
	type?: 'string' | 'number' | 'boolean' | 'url' | 'email' | 'regexp' | 'integer' | 'float' | 'array' | 'object' | 'enum' | 'date' | 'url' | 'hex' | any
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