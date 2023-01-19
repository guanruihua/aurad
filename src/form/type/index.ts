export type FormRecord = Record<string, any>

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
export type FormElementValue = undefined | string | number
