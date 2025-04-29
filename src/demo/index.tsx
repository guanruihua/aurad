import React from 'react'
import { mock } from 'mock-record'
import { ClassNameType } from 'harpe'

interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
}

export function RD(props: Props) {
  const { style, children, ...rest } = props as any
  const height = mock('@num(30,80)')
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: mock('@num(30,80)'),
        height,
        background: mock('@color'),
        color: '#fff',
        textAlign: 'center',
        ...style,
      }}
      {...rest}>
      {children}
    </div>
  )
}

export function RFD(props: Props) {
  const { style, children, ...rest } = props as any
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        background: mock('@color'),
        color: '#fff',
        textAlign: 'center',
        ...style,
      }}
      {...rest}>
      {children}
    </div>
  )
}

export function RDS(
  props: Props & {
    count?: number
    fill?: boolean
  },
) {
  const { fill, count = 10, ...rest } = props

  if (fill === true) {
    return new Array(count).fill('').map((_, index) => {
      return (
        <RFD key={index} {...rest}>
          {index}
        </RFD>
      )
    })
  }
  return new Array(count).fill('').map((_, index) => {
    return (
      <RD key={index} {...rest}>
        {index}
      </RD>
    )
  })
}
