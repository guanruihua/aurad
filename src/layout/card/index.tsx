import React, { ReactNode } from 'react'
import { classNames, ClassNameType } from 'harpe'
import { isNoEmpty } from 'asura-eye'
import './index.less'
import './night.less'

export interface CardProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'className' | 'title'
  > {
  className?: ClassNameType
  header?: ReactNode
  title?: ReactNode
  headerStyle?: React.CSSProperties
  footer?: ReactNode
  footerStyle?: React.CSSProperties
}

export function Card(props: CardProps) {
  const {
    footer,
    footerStyle,
    header,
    title,
    headerStyle,
    className,
    children,
    ...rest
  } = props

  return (
    <div className={classNames('au-card', className)} {...rest}>
      {isNoEmpty(header || title) && (
        <div className='au-card-header' style={headerStyle}>
          {header || title}
        </div>
      )}
      <div className='au-card-content'>{children}</div>
      {isNoEmpty(footer) && (
        <div className='au-card-footer' style={footerStyle}>
          {footer}
        </div>
      )}
    </div>
  )
}
