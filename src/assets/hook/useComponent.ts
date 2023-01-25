// import { classNames } from '../util'
import { ComponentBaseProps } from '../type'

export function useComponent<Type extends ComponentBaseProps>(props: Type) {
	// const { className, style, ...rest } = props
	return [
		{
			// className: classNames(className),
			// style: style,
		},
		// rest
	]
}
