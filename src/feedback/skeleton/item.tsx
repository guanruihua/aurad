import React from 'react'
import './index.less'
import { classNames } from 'harpe'
import { SkeletonItemProps } from './type'

export function SkeletonItem(props: SkeletonItemProps) {
  const { type = 'square', children, className, ...rest } = props
  return (
    <span
      className={classNames(
        'au-skeleton-item',
        `au-skeleton-${type}`,
        className,
      )}
      {...rest}>
      {children}
    </span>
  )
}
