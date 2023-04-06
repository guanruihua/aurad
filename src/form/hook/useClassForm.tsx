/* eslint-disable*/
import { createRef, RefObject, useContext, createContext } from 'react'
import { setFieldValueHoc, setFieldsValueHoc, getFieldValueHoc, getFieldsValueHoc } from './util'
import { UseForm } from './type'
import React from 'react';


// export const useClassForm = () => {
export function useClassForm(_this?: any) {
	const ref: RefObject<HTMLFormElement> = createRef()

	// console.log(this, _this)

	const setFieldValue = setFieldValueHoc(ref)

	const setFieldsValue = setFieldsValueHoc(ref)

	const getFieldValue = getFieldValueHoc(ref)

	const getFieldsValue = getFieldsValueHoc(ref)

	return {
		ref,
		getFieldsValue,
		getFieldValue,
		setFieldValue,
		setFieldsValue,
	}
}