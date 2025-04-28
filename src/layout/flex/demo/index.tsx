import React from 'react'
import { Flex } from '..'
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
          title: 'Flex(default)',
          children: (
            <Flex gap={10}>
              <RDS count={20} />
            </Flex>
          ),
        },
        {
          title: 'Flex(custom align)',
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
              {/* </Flex> */}
              <Flex align={align}>
                <RDS count={20} />
              </Flex>
            </div>
          ),
        },
        {
          title: 'Flex(custom layout)',
          children: (
            <div>
              <Flex style={{ marginBottom: 10 }}>
                {/* <Radio.Group
					type="button"
					defaultValue={'vertical'}
					options={['vertical', 'horizontal']}
					onChange={(value: Direction) => {
						setLayout(value)
					}}
				/> */}
              </Flex>
              <Flex gap={10} direction={layout}>
                <RDS count={5} />
              </Flex>
            </div>
          ),
        },
      ]}
    />
  )
}
