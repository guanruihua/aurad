import { InputHTMLAttributes, ChangeEvent } from 'react'
import { ComponentProps } from "@/assets"

type excludeInputType = 'children' | 'style' | 'defaultChecked'
export interface InputProps extends Omit<Partial<InputHTMLAttributes<HTMLInputElement>>, excludeInputType>, ComponentProps {
	[key: string]: any
}


export type InputChangeEvent = ChangeEvent<HTMLInputElement>