import { ComponentProps } from "@/assets"

export interface InputProps extends Omit<Partial<HTMLInputElement>, 'children' | 'style'>, ComponentProps {
	[key: string]: any
}