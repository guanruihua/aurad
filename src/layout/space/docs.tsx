import React, { useRef } from 'react'
import { ComponentProps, useSetState } from '@/assets'
import './index.less'
import { classNames } from 'harpe'

export function Docs(
  props: ComponentProps & { column?: number; toc?: ComponentProps[] },
) {
  const { height, className, toc, column, children, ...rest } = props
  const ref = useRef<HTMLDivElement>(null)
  if (column && column > 0) {
    if (rest.style) {
      rest.style.columnCount = column
    } else {
      rest.style = {
        columnCount: column,
      }
    }
  }
  const [state, setState] = useSetState({
    select: 0,
  })
  const scrollIntoView = (i: number) => {
    if (!ref.current) return

    setTimeout(() => {
      const selectors = `.au-docs-count>.content>.au-docs-count-item`
      const doms = document.querySelectorAll(selectors)
      let h = 0
      doms.forEach((dom, j: number) => {
        if (j >= i) return
        const { height } = dom.getBoundingClientRect()
        h += height + 10
      })
      ref.current?.scrollTo(0, h)
      setState({
        select: i,
      })
    }, 300)
  }

  return (
    <div
      className={classNames(
        'au-docs-count',
        {
          'au-docs-count-has-toc': toc?.length,
        },
        className,
      )}
      {...rest}>
      <div
        className='content'
        ref={ref}
        style={{
          maxHeight: 'calc(100vh - 60px)',
        }}>
        {toc?.map((item, i) => (
          <DocsItem key={i} {...item} />
        ))}
        {children}
      </div>
      {toc?.length && (
        <div className='au-docs-count-toc'>
          {toc.map((item, i) => (
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

export function DocsItem(
  props: ComponentProps & { title?: React.ReactNode },
) {
  const { className, title, children, ...rest } = props
  return (
    <div className={classNames('au-docs-count-item', className)} {...rest}>
      {title && <h2 className='au-docs-count-item-title'>{title}</h2>}
      {children}
    </div>
  )
}

Docs.Item = DocsItem
