import React from 'react'
import { Input, InputChangeEvent, InputNumber } from '@/form'
import { Table } from '@/dataGraph'
import { Docs } from '@/layout'

export default function InputTestCmp() {
  const [value, setValue] = React.useState<string>('value')

  return (
    <Docs
      items={[
        {
          title: 'Input',
          children: <InputNumber />,
        },
      ]}
    />
  )
}
