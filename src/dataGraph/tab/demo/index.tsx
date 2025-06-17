import React from 'react'
import { Tab } from '..'
import { Docs } from '@/layout'

const items = [
  {
    title: 'title1',
    key: '1',
    children: 11111111,
  },
  {
    title: 'title2',
    key: '2',
    children: 22222222,
  },
  {
    title: 'title3',
    key: '3',
    children: 11111111,
  },
  {
    title: 'title4',
    key: '4',
    disabled: true,
    children: 44444444,
  },
]
export default function () {
  const [val, setVal] = React.useState('1')
  return (
    <Docs
      items={[
        {
          title: 'value & onChange',
          children: <Tab value={val} onChange={setVal} items={items} />,
        },
        {
          title: 'defaultValue',
          children: <Tab defaultValue='3' items={items} />,
        },
        { title: 'value', children: <Tab value='3' items={items} /> },
      ]}
    />
  )
}
