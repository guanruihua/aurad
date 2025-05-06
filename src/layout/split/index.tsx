import React from 'react'
import './index.less'
import { classNames, ClassNameType } from 'harpe'

export interface SplitItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  min?: number
  max?: number
  className?: ClassNameType
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface SplitProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
  style?: React.CSSProperties
  /**
   * @default 10
   */
  gap?: number
  items?: [SplitItemProps, SplitItemProps]
  [key: string]: any
}

export function Split(props: SplitProps) {
  const { gap = 10, items = [], className, style, ...rest } = props
  const leftRef = React.useRef<HTMLDivElement>(null)
  const [left, right] = items
  const startX = React.useRef(0)
  const startWidth = React.useRef(0)
  const boxWidth = React.useRef(0)

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    startX.current = e.clientX
    startWidth.current = leftRef.current?.getBoundingClientRect()?.width || 0
    boxWidth.current =
      leftRef.current?.parentElement?.getBoundingClientRect().width || 0
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  const onMouseMove = (e: MouseEvent) => {
    const newWidth = startWidth.current - (startX.current - e.clientX)
    const getWidth = () => {
      if (newWidth < 0) return 0
      // left
      if (left?.max && newWidth > left.max) return left.max
      if (left?.min && newWidth < left.min) return left.min
      // right
      if (right?.min && newWidth + right.min > boxWidth.current - gap)
        return boxWidth.current - gap - right.min
      return newWidth
    }

    if (leftRef.current) {
      leftRef.current.style.width = getWidth() + 'px'
    }
  }

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }
  const getRest = (cfg: SplitItemProps = {}) => {
    const { style, className, children, ...rest } = cfg
    return rest
  }
  return (
    <div
      className={classNames('au-split', className)}
      style={{
        gridTemplateColumns: `auto ${gap}px 1fr`,
        ...style,
      }}
      {...rest}>
      <div
        ref={leftRef}
        className={classNames('au-split-box au-split-left', className)}
        style={{
          maxWidth: left?.max ?? 'auto',
          minWidth: left?.min ?? 'auto',
          ...left?.style,
        }}
        {...getRest(left)}>
        {left?.children}
      </div>
      <div
        className='au-split-btn'
        onMouseDown={onMouseDown}
        style={{ width: gap }}></div>
      <div
        className={classNames('au-split-box au-split-right', className)}
        style={{
          maxWidth: right?.max ?? 'auto',
          minWidth: right?.min ?? 'auto',
          ...right?.style,
        }}
        {...getRest(left)}>
        {right?.children}
      </div>
    </div>
  )
}
