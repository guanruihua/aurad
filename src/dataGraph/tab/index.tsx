import { classNames, ClassNameType } from 'harpe'
import React from 'react'
import './index.less'
import { Div } from '@/element'

export interface TabItemProps {
  title: string | React.ReactNode
  key: string
  className?: ClassNameType
  disabled?: boolean
  style?: React.CSSProperties
  children: React.ReactNode
}

export interface TabProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'children' | 'className' | 'onChange'
  > {
  className?: ClassNameType
  items: TabItemProps[]
  defaultValue?: string
  value?: string
  onChange?(key: string): void
  children?: never
}

export function Tab(props: TabProps) {
  const {
    defaultValue,
    value,
    onChange,
    className,
    items = [],
    ...rest
  } = props
  const getHandle = () => {
    if (value) {
      return [value, (val: string) => {}] as [string , (val: string) => void]
    }
    return React.useState<string>(defaultValue ?? items[0].key)
  }
  const [nowActiveKey, setNowActiveKey] = getHandle()

  return (
    <div className={classNames('au-tab', className as any)} {...rest}>
      <div className='header'>
        {items.map((item, i) => {
          const { title, key = String(i), disabled, style, className } = item
          return (
            <Div
              key={i}
              className={className}
              classNames={{
                select: key === nowActiveKey,
                disabled,
              }}
              onClick={() => {
                onChange && onChange(key)
                if (value === undefined) setNowActiveKey(key)
              }}
              style={{
                cursor: 'pointer',
                ...style,
              }}>
              {title}
            </Div>
          )
        })}
      </div>
      <div className='content'>
        {items.map((item, i) => {
          const { key = i, children } = item
          return (
            <Div
              key={i}
              style={{ display: nowActiveKey === key ? 'block' : 'none' }}>
              {children}
            </Div>
          )
        })}
      </div>
    </div>
  )
}
