import { isEffectArray, isEmpty } from 'asura-eye'
import { useState } from 'react'

export type UseSetState<T extends Record<string, any>> = [
	T,
	(patch: Partial<T> | ((prevState: T) => Partial<T>)) => void,
	() => void,
]

export function useSetState<T extends Record<string, any>>(initialState: T = {} as T)
	: UseSetState<T> {

	const [state, setState] = useState<T>(initialState)
	return [
		state,
		(patch: Partial<T> | ((prevState: T) => Partial<T>)): void => {
			if (typeof patch === 'function') {
				setState({ ...state, ...patch(state) })
			} else {
				setState({ ...state, ...patch })
			}
		},
		(names?: string[]): void => {
			if (isEffectArray(names)) {
				const newState: T = { ...state }
				names.forEach((name) => {
					if (isEmpty(name)) return;
					(newState as Record<string, any>)[name] = undefined
				})
				setState(newState)
				return
			}
			setState(initialState)
		}
	]

}
