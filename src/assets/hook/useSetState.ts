import { useState } from 'react'

export function useSetState<T extends Record<string, any>>(initialState: T = {} as T)
	: [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] {

	const [state, setState] = useState<T>(initialState)
	return [
		state,
		(patch: Partial<T> | ((prevState: T) => Partial<T>)): void => {
			if (typeof patch === 'function') {
				setState({ ...state, ...patch(state) })
			} else {
				setState({ ...state, ...patch })
			}
		}
	]

}
