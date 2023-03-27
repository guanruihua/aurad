import { useState, useEffect } from "react"

export function useValidator(rules: any[] = []) {
	const [errorStatus, setErrorStatus] = useState<boolean>(false)
	const [errorMsg, setErrorMsg] = useState<any>('')

	useEffect(() => {
		// rules.forEach((rule: ObjectType, index: number) => {
		// 	const { required = false, message = '', trigger = 'onChange' } = rule
		// 	// const { required = false, message = '', trigger = 'onChange' } = rule
		// })

	}, [rules.length])

	const expandProps = {
		onChange: (e: any) => {
			console.log(e)
			if (!e || !e.target) return;
			const value: string = e.target.value || ''
			if (value.trim() === '') {
				setErrorStatus(true)
				setErrorMsg('不可以为空')
			} else {
				setErrorStatus(false)
			}
		}
	}
	return {
		errorStatus,
		errorMsg,
		expandProps,
	}
}