/* eslint-disable*/
import { useForm } from './useForm'
import React from 'react';

export function injectForm(CMM: any): any {
	function Dom(props: any): any {
		const form = useForm()
		return <CMM form={form} />
	}
	return Dom
}
