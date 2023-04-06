import { isString } from "asura-eye"
import { useState, useEffect } from "react"

export function useValidator(rules: any[] = []) {
	const [errorStatus, setErrorStatus] = useState<boolean>(false)
	const [errorMsg, setErrorMsg] = useState<any>('')

	const resetErrorStatus = () => {
		setErrorStatus(false)
		setErrorMsg('')
	}

	useEffect(() => {
		// rules.forEach((rule: ObjectType, index: number) => {
		// 	const { required = false, message = '', trigger = 'onChange' } = rule
		// 	// const { required = false, message = '', trigger = 'onChange' } = rule
		// })

	}, [rules.length])

	const expandProps = {
		onValidatorChange: (e: any) => {
			// console.log(e)
			const value: string = isString(e) ? e : ((!e || !e.target) ? '' : e.target.value || '')
			// console.log('vv', value)
			
			if (value.trim() === '') {
				setErrorStatus(true)
				setErrorMsg('不可以为空')
				return true
			}
			
			setErrorStatus(false)
			return false

		}
	}
	return {
		errorStatus,
		errorMsg,
		expandProps,
		resetErrorStatus,
	}
}