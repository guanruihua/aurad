{
  /* <input id="num" inputmode="numeric">
<input id="email" inputmode="email">
<input id="tel" inputmode="tel">
<input id="url" inputmode="url" type="url"> */
}

import React from 'react'
import { Input, InputChangeEvent } from '..'
import { Table } from '@/dataGraph'
import { Docs } from '@/layout'
import WithForm from './fc-test'

export default function InputTestCmp() {
  const [value, setValue] = React.useState<string>('value')

  return (
    <Docs
      items={[
        { title: 'Input & Form', children: <WithForm /> },
        {
          title: 'Input',
          children: (
            <Table
              noBorder
              dataSource={[
                { component: <Input />, prop: 'Empty', desc: '默认' },
                {
                  component: <Input defaultValue={'defaultValue'} />,
                  prop: 'defaultValue ',
                  desc: '设置默认值',
                },
                {
                  component: <Input value={'value'} />,
                  prop: 'value',
                  desc: '设置值, 没有设置onChange修改该值, 无法修改值',
                },
                {
                  component: (
                    <Input
                      value={value}
                      onChange={(e: InputChangeEvent) => {
                        setValue(e.target.value)
                      }}
                    />
                  ),
                  prop: 'value, onChange',
                  desc: '设置值, 通过onChange回调设置该值',
                },
              ]}
              columns={[
                { title: 'Component', dataIndex: 'component' },
                { title: 'Props', dataIndex: 'prop' },
                { title: 'Description', dataIndex: 'desc' },
              ]}
            />
          ),
        },
      ]}
    />
  )
}
