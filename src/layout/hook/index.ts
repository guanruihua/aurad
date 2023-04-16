import { RefObject, useEffect, useRef } from 'react'
import { xs, sm, md, lg, xl, xxl } from '../constant'
import { isEmpty } from 'asura-eye'
import { ObjectType, debounce } from 'abandonjs'
import { ComponentProps } from '@/assets'

export interface UseLayoutProps<Value, Props> {
	defaultValue: Value
	defaultEffectKey: string
	props: Props
	callback: (value: Value, effectKey?: string) => void
}

function exclude<T extends ObjectType>(
	record: T,
	propList: string[]
): T {
	const newRecord: T = {} as T
	for (const key in record) {
		if (propList.includes(key)) continue;
		newRecord[key] = record[key]
	}
	return newRecord
}

export function useLayout<
	RefElement extends Element,
	Value extends any = any,
	Props extends ComponentProps = ComponentProps
>(params: UseLayoutProps<Value, Props>) {

	const { callback, props, defaultEffectKey, defaultValue } = params

	const ref: RefObject<RefElement> = useRef(null)
	const newProps: Props = exclude<Props>(props, ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'])

	function handleWidth(width: number) {
		console.log(width)
		if (!isEmpty(props.xxl) && width > xxl) return callback(props.xxl as Value, 'xxl')
		if (!isEmpty(props.xl) && width > xl) return callback(props.xl as Value, 'xl')
		if (!isEmpty(props.lg) && width > lg) return callback(props.lg as Value, 'lg')
		if (!isEmpty(props.md) && width > md) return callback(props.md as Value, 'md')
		if (!isEmpty(props.sm) && width > sm) return callback(props.sm as Value, 'sm')
		if (!isEmpty(props.xs) && width < xs) return callback(props.xs as Value, 'xs')
		if (!isEmpty(props[defaultEffectKey])) {
			return callback(props[defaultEffectKey] as Value, defaultEffectKey)
		}
		return callback(defaultValue, defaultEffectKey)
	}


	useEffect(() => {

		if (isEmpty(ref.current)) return;
		const { width } = ref.current.getBoundingClientRect()
		handleWidth(width)

		const observer = new ResizeObserver(debounce(() => {

			if (isEmpty(ref.current)) return;
			const { width } = ref.current.getBoundingClientRect()
			handleWidth(width)

		}, 50));

		observer.observe(ref.current);

		return () => {
			ref.current &&
				observer.unobserve(ref.current)
		}
	}, [ref.current])

	return {
		ref,
		props: newProps
	}
}