import { ComponentProps } from '@/assets'
import { classNames } from 'harpe'
import React from 'react'
import './index.less'

interface TabItem {
  title: string | React.ReactNode
  key: string
  children: React.ReactNode
}

export interface TabProps extends ComponentProps {
  items: TabItem[]
  defaultValue?: string
  value?: string
  onChange?(key: string): void
  children?: never
}

export function Tab(props: TabProps) {
  const {
    prefixCls,
    defaultValue,
    value,
    onChange,
    className,
    items = [],
    ...rest
  } = props
  const getHandle = () => {
    if (value) {
      return [value, (val: string) => {}] as [string, (val: string) => void]
    }
    return React.useState<string>(defaultValue ?? items[0].key)
  }
  const [nowActiveKey, setNowActiveKey] = getHandle()

  return (
    <div className={classNames('au-tab', className as any)} {...rest}>
      <div className='header'>
        {items.map((item, i) => {
          const { title, key } = item
          return (
            <div
              key={i}
              className={classNames({ select: key === nowActiveKey })}
              onClick={() => {
                onChange && onChange(key)
                if (value === undefined) setNowActiveKey(key)
              }}
              style={{
                cursor: 'pointer'
              }}>
              {title}
            </div>
          )
        })}
      </div>
      <div className='content'>
        {items.map((item, i) => {
          const { key, children } = item
          return (
            <div
              key={i}
              style={{ display: nowActiveKey === key ? 'block' : 'none' }}>
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}
