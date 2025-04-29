import React, { ReactNode } from 'react'
import { FormContext } from './context'
import type { FormAction, Rule, UseForm } from './hook/type'
import { classNames, ClassNameType } from 'harpe'
import { isEmpty } from 'asura-eye'

export interface FormItemProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'className'> {
  name?: string
  label?: ReactNode
  rules?: Rule[]
  /**
   * @description 直接控件的值的索引
   * @default 'value'
   */
  valueIndex?: 'value' | 'checked' | string
  className?: ClassNameType
  [key: string]: any
}

export interface ItemCoreProps extends FormItemProps {
  __form__: UseForm
}

function FormItemCore(props: FormItemProps) {
  const {
    className,
    label,
    name,
    rules,
    valueIndex = 'value',
    __form__,
    children,
    ...rest
  } = props

  React.useEffect(() => {
    if (name && __form__) {
      __form__.fieldAction.set(name, { name, rules })
    }
  }, [name])

  if (__form__ && name && React.isValidElement(children)) {
    const { values, error = {} } = __form__
    const { onChange, ...childRest } = children.props

    const newProps = {
      ...childRest,
      [valueIndex]: values[name],
      onChange: (e: React.ChangeEvent<any>) => {
        onChange && onChange(e)
        const getValue = () => {
          const newValue = e.target[valueIndex]

          if (isEmpty(newValue)) return ''
          return newValue
        }

        const value = getValue()
        __form__.validateField(name, value)
        __form__.setValues({ [name]: value })
      },
    }

    if (isEmpty(values[name])) delete newProps[valueIndex]

    const hasError = error?.[name]?.error?.length

    const newClassName = classNames('au-form-item', className, {
      ['au-form-item-error-status']: hasError,
    })

    const renderError = () => {
      if (hasError) {
        return error[name]?.error.join(', ')
      }
      return ''
    }

    return (
      <div className={newClassName} {...rest}>
        {label && <label className='au-form-item-label'>{label}</label>}
        <div className='au-form-item-control'>
          {React.cloneElement(children, newProps)}
        </div>
        <div className='au-form-item-error-status-message'>{renderError()}</div>
      </div>
    )
  }

  return (
    <div className={classNames('au-form-item', className)} {...rest}>
      {label && <label className='au-form-item-label'>{label}</label>}
      {children}
    </div>
  )
}

/**
 * @title  FormItem
 * @description 受控子组件必须拥有value, 若值发生改变, 需要受控onChange
 * @param props {FormItemProps}
 * @returns
 */
export function FormItem(props: FormItemProps) {
  return (
    <FormContext.Consumer>
      {(target: FormAction) => <FormItemCore {...target} {...props} />}
    </FormContext.Consumer>
  )
}
