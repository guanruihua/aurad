/* eslint-disable*/
import { useRef } from 'react';
import {FormProps} from '.'

export function useForm(){
	return useRef<HTMLFormElement>(null)
}