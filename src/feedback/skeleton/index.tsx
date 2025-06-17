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

  return (
    <div
      className={classNames(
        'au-skeleton',
        {
          'au-skeleton-active': active,
        },
        className,
      )}
      style={
        {
          '--size': `var(--size-${size})`,
          ...style,
        } as React.CSSProperties
      }
      {...rest}>
      {children}
    </div>
  )
}
