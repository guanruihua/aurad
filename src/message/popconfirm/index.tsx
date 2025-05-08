import React from 'react'
import { classNames } from 'harpe'
import type { PopConfirmProps } from './type'
import { getPopStyle } from './util'
import { ObjectType } from '0type'
import './index.less'

export * from './type'

export function PopConfirm(props: PopConfirmProps) {
  const {
    placement = 'top',
    className,
    children,
    content = '',
    ...rest
  } = props
  const [styles, setStyles] = React.useState<ObjectType<React.CSSProperties>>(
    {},
  )

  const ref = React.useRef<HTMLDivElement>(null)
  const popRef = React.useRef<HTMLDivElement>(null)
  const statusRef = React.useRef({
    box: false,
    pop: false,
  })
  const timer = React.useRef<any>(null)

  function handleOpen() {
    if (!popRef.current || !ref.current?.firstElementChild) return
    const r = ref.current.firstElementChild.getBoundingClientRect()
    const p = popRef.current.getBoundingClientRect()
    popRef.current.style.visibility = 'visible'
    statusRef.current.box = true
    statusRef.current.pop = false

    const { innerStyle, popStyle } = getPopStyle({
      placement,
      childSize: r,
      popSize: p,
    })
    setStyles({
      innerStyle,
      popStyle,
    })
  }

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!Object.values(statusRef.current).includes(true)) {
        if (!popRef.current) return
        popRef.current.style.visibility = 'hidden'
      }
    }, 800)
    return () => {
      timer && clearInterval(timer.current)
    }
  }, [statusRef.current.pop, statusRef.current.box])

  return (
    <div
      ref={ref}
      className={classNames('au-popConfirm', className)}
      onMouseLeave={() => (statusRef.current.box = false)}
      onMouseEnter={() => ((statusRef.current.box = true), handleOpen())}
      {...rest}>
      {children}
      <div
        ref={popRef}
        className='au-popConfirm-dialog'
        onMouseLeave={() => (statusRef.current.pop = false)}
        onMouseEnter={() => (statusRef.current.pop = true)}
        style={styles.popStyle}>
        <div className='au-popConfirm-inner' style={styles.innerStyle}>
          {content}
        </div>
      </div>
    </div>
  )
}
