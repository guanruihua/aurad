import React from 'react'
import { classNames } from 'harpe'
import type { SkeletonProps } from './type'
import { SkeletonChildDefault } from './constant'
import './index.less'
import './night.less'

export * from './type'
export * from './item'

export function Skeleton(props: SkeletonProps) {
  const {
    size = 'default',
    active = true,
    className,
    children = SkeletonChildDefault,
    style = {},
    ...rest
  } = props

  const newStyle: React.CSSProperties = {
    '--size': `var(--size-${size})`,
    ...style,
  } as React.CSSProperties

  return (
    <div
      className={classNames('au-skeleton', className, {
        'au-skeleton-active': active,
      })}
      style={newStyle}
      {...rest}>
      {children}
    </div>
  )
}
