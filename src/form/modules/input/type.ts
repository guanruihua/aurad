import { InputHTMLAttributes, ChangeEvent } from 'react'
import { ComponentProps } from "@/assets"


type InputMode = 'text' | 'number' | 'tags'
type excludeInputType = 'children' | 'style' | 'defaultChecked'
export interface InputProps extends Omit<Partial<InputHTMLAttributes<HTMLInputElement>>, excludeInputType>, ComponentProps {
	mode?: InputMode
}


export type InputChangeEvent = ChangeEvent<HTMLInputElement>