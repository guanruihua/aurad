import React from 'react'
import { Container, Unit } from 'unit-testing-react'
import { Tab } from '..'

const items = [
  {
    title: 'title1',
    key: '1',
    children: 11111111
  },
  {
    title: 'title2',
    key: '2',
    children: 22222222
  },
  {
    title: 'title3',
    key: '3',
    children: 11111111
  },
  {
    title: 'title4',
    key: '4',
    children: 44444444
  }
]
export default function () {
  const [val, setVal] = React.useState('1')
  return (
    <Container>
      <Unit title='value & onChange'>
        <Tab value={val} onChange={setVal} items={items} />
      </Unit>
      <Unit title='defaultValue'>
        <Tab defaultValue='3' items={items} />
      </Unit>
      <Unit title='value'>
        <Tab value='3' items={items} />
      </Unit>
    </Container>
  )
}
