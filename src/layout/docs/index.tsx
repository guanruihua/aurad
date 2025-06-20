import React, { useRef } from 'react'
import { useSetState } from '0hook'
import { classNames, ClassNameType, copyText } from 'harpe'
import './index.less'
import { Code } from './code'
import { Icon } from '@/icon'
import { message } from '@/message'
import { isEffectArray } from 'asura-eye'

export interface DocsItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'title'> {
  className?: ClassNameType
  title: React.ReactNode
  defaultShowCode?: boolean
  code?: string
  children?: React.ReactNode
  next?: boolean
  items?: DocsItemProps[]
}

export interface DocsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
  items?: DocsItemProps[]
}

export function Docs(props: DocsProps) {
  const { className, items, children, ...rest } = props

  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useSetState({
    select: 0,
  })
  const scrollIntoView = (i: number) => {
    if (!ref.current) return

    setTimeout(() => {
      const selectors = `.au-docs>.content>.au-docs-item`
      const doms = document.querySelectorAll(selectors)
      let h = 0
      doms.forEach((dom, j: number) => {
        if (j >= i) return
        const { height } = dom.getBoundingClientRect()
        h += height + 10
      })
      ref.current?.parentElement?.scrollTo({
        left: 0,
        top: h,
        behavior: 'smooth',
      })
      setState({
        select: i,
      })
    }, 300)
  }

  return (
    <div
      ref={ref}
      className={classNames(
        'au-docs',
        {
          'au-docs-has-toc': items?.length,
        },
        className,
      )}
      {...rest}>
      <div className='content'>
        {items?.map((item, i) => (
          <DocsItem key={i} {...item} />
        ))}
        {children}
      </div>
      {items?.length && (
        <div className='au-docs-toc'>
          {items.map((item, i) => (
            <div
              key={i}
              className={classNames({
                select: i === state.select,
              })}
              onClick={() => scrollIntoView(i)}>
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function DocsItem(props: DocsItemProps) {
  const {
    className,
    title,
    defaultShowCode = false,
    code,
    children,
    items,
    next,
    ...rest
  } = props

  const [showCode, setShowCode] = React.useState(defaultShowCode)

  return (
    <div
      className={classNames(
        'au-docs-item',
        { 'au-docs-item-next': next },
        className,
      )}
      {...rest}>
      {title && <h2 className='au-docs-item-title'>{title}</h2>}
      {isEffectArray(items) && (
        <div className='au-docs-item-next-content'>
          {items.map((item, i) => (
            <DocsItem key={i} {...item} next />
          ))}
        </div>
      )}
      <div className='au-docs-item-content'>{children}</div>
      {code && (
        <div className='au-docs-item-code'>
          <span className='btns'>
            {showCode && (
              <Icon
                type='copy'
                onClick={() =>
                  copyText(code)
                    ? message.success('Copy Success')
                    : message.error('Copy Error')
                }
              />
            )}
            <Icon type='code' onClick={() => setShowCode((v) => !v)} />
          </span>
          {showCode && <Code code={code} />}
        </div>
      )}
    </div>
  )
}

Docs.Item = DocsItem

export { Code }
