import React from 'react'
import { isEffectArray, isString } from 'asura-eye'
import { classNames } from 'harpe'
import type { MenuObject, MenuProps } from '../type'
import './index.less'
import { Icon } from '@/icon'
import { Div } from '@/element'

export function NextSubMenu(props: MenuProps) {
  const { hook, menu, lv = 1, prePath='/',  className } = props

  const { state, setState, onSelect } = hook
  const { fold = false, select = {}, opens = [] } = state

  return (
    <React.Fragment>
      {menu.map((item: MenuObject) => {
        const { title, name, path = '', children = [] } = item
        const newPath = prePath + path
        let { id } = item
        if (!id) {
          id = `lv${lv}|${newPath}`
          item.id = id
        }

        if (!name) return

        return (
          <div
            key={id}
            className={classNames('au-next-menu', 'lv' + lv, className)}>
            <div
              className={classNames('au-next-menu-content', {
                select: select.id === id,
                fold,
              })}
              title={name}
              onClick={() => onSelect(item)}>
              <div className='label'>
                <div>{title || name}</div>
              </div>
              {!fold && isEffectArray(children) && (
                <Icon
                  type='bottom'
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => onSelect(item)}
                />
              )}
            </div>
            <Div
              none={fold || !opens.includes(id) || children.length < 1}
              className={'au-next-menu-content-children'}>
              <NextSubMenu prePath={newPath} hook={hook} lv={lv + 1} menu={children} />
            </Div>
          </div>
        )
      })}
    </React.Fragment>
  )
}
