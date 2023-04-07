/* eslint-disable*/
import React, { ComponentType } from 'react';
import { useForm } from './useForm'

export function injectForm<T>(
	WrappedComponent: ComponentType<T>
): any {

	return function (props: any): any {
		const form = useForm()
		return <WrappedComponent {...props} form={form} />
	}
}
