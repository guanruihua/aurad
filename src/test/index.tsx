/* eslint-disable*/
import React, { Component, InputHTMLAttributes, MutableRefObject, useRef, useState } from 'react';

export interface CustomInputProps {
	onChange?: (event: Event) => void;
	onInput?: (event: Event) => void;
	[key: string]: any
}

/**
 * This component restores the 'onChange' and 'onInput' behavior of JavaScript.
 *
 * See:
 * - https://reactjs.org/docs/dom-elements.html#onchange
 * - https://github.com/facebook/react/issues/3964
 * - https://github.com/facebook/react/issues/9657
 * - https://github.com/facebook/react/issues/14857
 */
export class CustomInput extends Component<InputHTMLAttributes<HTMLInputElement> & CustomInputProps> {
	// export class CustomInput extends Component<Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onInput' | 'ref'> & CustomInputProps> {
	private readonly registerCallbacks = (element: HTMLInputElement | null) => {
		if (element) {
			element.onchange = this.props.onChange ? this.props.onChange : null;
			element.oninput = this.props.onInput ? this.props.onInput : null;
		}
	};

	public render() {
		return <input
			ref={this.registerCallbacks}
			{...this.props}
			onChange={undefined}
			onInput={undefined} />;
	}
}

export default function () {
	const [v, sv] = useState<string>('')
	const ref: any = useRef()
	return <div>
		<CustomInput
			ref={ref}
			defaultValue={v}
			onChange={(e) => {
				console.log(e)
			}} />
		<button onClick={() => {
			console.log(ref)
		}}>change</button>
	</div>
}
