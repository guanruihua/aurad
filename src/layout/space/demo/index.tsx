import React from 'react'
import { Space } from '..'
import { Direction, type Align } from '../../type'
import { RDS } from '@/demo'
import { Docs } from '../../docs'

export default function () {
  const [align, setAlign] = React.useState<Align>('start')
  const [layout, setLayout] = React.useState<Direction>('vertical')

  return (
    <Docs
      items={[
        {
          title: 'Space(default)',
          children: (
            <Space gap={10}>
              <RDS count={20} />
            </Space>
          ),
        },
        {
          title: 'Space(custom align)',
          children: (
            <div style={{ marginBottom: 10 }}>
              {/* <Radio.Group
					type="button"
					defaultValue={'start'}
					options={['start', 'end', 'center', 'between', 'around']}
					onChange={(value: Align) => {
						setAlign(value)
					}}
				/> */}
              {/* </Space> */}
              <Space align={align}>
                <RDS count={20} />
              </Space>
            </div>
          ),
        },
        {
          title: 'Space(custom layout)',
          children: (
            <div>
              <Space style={{ marginBottom: 10 }}>
                {/* <Radio.Group
					type="button"
					defaultValue={'vertical'}
					options={['vertical', 'horizontal']}
					onChange={(value: Direction) => {
						setLayout(value)
					}}
				/> */}
              </Space>
              <Space gap={10} direction={layout}>
                <RDS count={5} />
              </Space>
            </div>
          ),
        },
      ]}
    />
  )
}
