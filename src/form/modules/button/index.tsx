import React, { ButtonHTMLAttributes, ReactNode, useRef } from 'react'
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import { isUndefined } from 'asura-eye'
import './style/index.less'
import './style/color.less'
import './style/night-color.less'

export interface ButtonProps extends ComponentProps {
  htmlType?: 'submit' | 'reset' | 'button'
  /**
   * @description 按钮类型
   * @default: 'default'
   */
  type?: 'primary' | 'text' | 'default'
  disabled?: boolean
}

export function Button(props: ButtonProps) {
  const { htmlType = 'button', children = '', className, type, ...rest } = props

  const getType = (): ButtonProps['type'] => {
    if (htmlType === 'submit' && isUndefined(type)) return 'primary'
    if (isUndefined(type)) return 'default'

    return type
  }

  const newClassName = classNames(
    `au-btn`,
    `au-btn-${getType()}`,
    { disabled: rest?.disabled },
    className,
  )
  const ref = useRef<HTMLButtonElement | null>(null)

  React.useEffect(() => {
    if (!ref.current || rest.disabled) return
    const handle = () => {
      const dom = document.createElement('span')
      dom.className = 'ripple'
      ref.current?.appendChild(dom)
      setTimeout(() => {
        ref.current?.removeChild(dom)
      }, 1000)
    }
    ref.current.removeEventListener('click', handle, false)
    ref.current.addEventListener('click', handle, false)
  }, [ref.current])

  return (
    <button
      ref={ref}
      type={htmlType}
      className={newClassName}
      {...(rest as ButtonHTMLAttributes<any>)}>
      <span className='content'>{children}</span>
    </button>
  )
}
