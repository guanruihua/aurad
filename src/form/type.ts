export type FormRecord = Record<string, any>

export interface FormAction {
	values: FormRecord
	setValues: (newValues: FormRecord) => void
}

export interface FormRule {
	required?: boolean
}