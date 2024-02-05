import React from 'react'
import { NumberScroll, SimpleNumberScroll } from '..'
import { Container, Unit } from 'unit-testing-react'
import { useInterval } from '0hook'

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
  }, 1000/2)

  return (
    <Container>
      <Unit title="NumberScroll">
        <NumberScroll value={value} maxLength={8} />
      </Unit>
      <Unit title="NumberScroll(自定义样式)">
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
      </Unit>
      <Unit title="SimpleNumberScroll">
        <SimpleNumberScroll value={value2} />
      </Unit>
    </Container>
  )
}
