import React from 'react'
import './index.less'
import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'

export interface TextMiddleEllipsisProps extends ComponentProps {
  text?: string
  children?: string
  [key: string]: any
}

export function TextMiddleEllipsis(props: TextMiddleEllipsisProps) {
  const { className, text, children, ...rest } = props
  const renderTxt = text ?? children

  return (
    <div className={classNames('au-text-middle-ellipsis', className)} {...rest}>
      <span className='txt'>{renderTxt}</span>
      <span className='title' title={renderTxt}>
        {renderTxt}
      </span>
    </div>
  )
}
