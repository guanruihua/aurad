import React from 'react'
import { NumberScroll, SimpleNumberScroll } from '..'
import { useInterval } from '0hook'
import { Docs } from '@/layout'

export default function () {
  const [value, setValue] = React.useState(19990)
  const [value2, setValue2] = React.useState(8)
  const newVal = 9000

  useInterval(() => {
    // const gap = Math.abs(value - newVal)
    // const len = gap.toString().length
    // const num = Number(String().padStart(len-1, '1'))
    // setValue((v) => v + num)
    setValue((v) => v + 1)
    setValue2((pv) => (pv === 9 ? 0 : pv + 1))
    return
  }, 1000 / 2)

  return (
    <Docs
      items={[
        {
          title: 'NumberScroll',
          children: <NumberScroll value={value} maxLength={8} />,
        },
        {
          title: 'NumberScroll(自定义样式)',
          children: (
            <NumberScroll
              rootStyle={{
                background: 'grey',
                padding: 10,
                borderRadius: 8,
                display: 'inline-grid',
              }}
              style={{
                background: '#108ee9',
              }}
              itemStyle={{
                color: '#fff',
              }}
              value={value}
            />
          ),
        },
        {
          title: 'SimpleNumberScroll',
          children: <SimpleNumberScroll value={value2} />,
        },
      ]}
    />
  )
}
