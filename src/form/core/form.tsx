import React from 'react'
import { FormContext } from './context'
import type { UseForm } from './hook/type'
import { useForm } from './hook'
import { FormItem } from './item'
import { ObjectType, toString } from 'abandonjs'
import { classNames, ClassNameType } from 'harpe'
import './index.less'

export type FormHandle =
  | ((form: UseForm) => void | Promise<void>)
  | (() => void | Promise<void>)

export interface FormProps
  extends Omit<
    React.HtmlHTMLAttributes<HTMLFormElement>,
    'className' | 'onReset' | 'onSubmit'
  > {
  form?: UseForm
  layout?: 'horizontal' | 'vertical' | 'inline'
  onReset?: FormHandle
  onSubmit?: FormHandle
  initialValues?: ObjectType<any>
  className?: ClassNameType
  [key: string]: any
}

export function Form(props: FormProps) {
  const {
    className,
    children,
    initialValues,
    onSubmit,
    onReset,
    form = useForm(),
    ...rest
  } = props

  React.useEffect(() => {
    if (initialValues) {
      form.setInitialValues(initialValues)
      form.setValues(initialValues)
    }
  }, [toString(initialValues)])

  return (
    <FormContext.Provider value={{ __form__: form }}>
      <form
        className={classNames(className)}
        noValidate
        onReset={() => {
          if (onReset) {
            onReset(form)
          } else {
            form.resetFields()
          }
        }}
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit && onSubmit(form)
        }}
        {...rest}>
        {children}
      </form>
    </FormContext.Provider>
  )
}

Form.Item = FormItem
