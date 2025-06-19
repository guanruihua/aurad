import React from 'react'
import { classNames } from 'harpe'
import type { MenuProps } from '../type'
import { NextSubMenu } from '../next'

export function SubMenu(props: MenuProps) {
  const { hook, menu = [], className, ...rest } = props

  return (
    <aside
      className={classNames(
        'au-menu lv0',
        { 'au-menu-fold': hook?.state?.fold },
        className,
      )}
      {...rest}>
      <NextSubMenu hook={hook} menu={menu} />
    </aside>
  )
}
