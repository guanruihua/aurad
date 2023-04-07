import React, { ComponentType } from 'react';
import { useForm } from './useForm'

// export function injectForm<T = any>(WrappedComponent: ComponentType<T>): ComponentType<T> {
export function injectForm<T = any>(WrappedComponent: ComponentType<T>): any {

	return function (props: any) {
		const form = useForm()
		return <WrappedComponent {...props} form={form} />
	}
}
