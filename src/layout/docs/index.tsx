import React, { useRef } from 'react'
import { ComponentProps, useSetState } from '@/assets'
import { classNames } from 'harpe'
import './index.less'

export function Docs(props: ComponentProps & { items?: ComponentProps[] }) {
  const { height, className, items, children, ...rest } = props

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
        behavior: 'smooth'
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

export function DocsItem(props: ComponentProps & { title?: React.ReactNode }) {
  const { className, title, children, ...rest } = props
  return (
    <div className={classNames('au-docs-item', className)} {...rest}>
      {title && <h2 className='au-docs-item-title'>{title}</h2>}
      {children}
    </div>
  )
}

Docs.Item = DocsItem
