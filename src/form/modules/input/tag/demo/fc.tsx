import React from 'react'
import { Container, Unit } from 'unit-testing-react'
import { Button, Form, Input, InputChangeEvent, useForm } from '@/form'
import { InputTag } from '..'
import { Space } from '@/layout'

export default function InputTestCmp() {
	const form = useForm()
  const [value, setValue] = React.useState<string>('value')

  return (
    <Container columns={1} title='Input'>
      <Form form={form}>
        <Form.Item name='a'>
          <InputTag />
        </Form.Item>
      </Form>
      <Form.Item name='b'>
        <InputTag defaultValue={'a1,b2,c3,e4,f5'} />
      </Form.Item>
      <Form.Item name='c'>
        <InputTag
          // defaultValue={[
          //   { id: '1', value: '1', label: '01' },
          //   { id: '2', value: '2', label: '11' },
          //   { id: '3', value: '3', label: '21' },
          //   { id: '4', value: '4', label: '31' },
          //   {
          //     id: '41',
          //     value: '41',
          //     label: '314141---------fasfasdjfkajskdfjaksdfkajsdfjakjsfjafjk'
          //   }
          //   // { id: '412', value: '412', label: '314141---------fasfasdjfkajskdfjaksdfkajsdfjakjsfjafjk333' },
          // ]}
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button htmlType='submit'>Submit</Button>
          <Button htmlType='reset'>Reset</Button>
          <Button onClick={() => form.setValue('b', 3)}>
            Form Set value(3)
          </Button>
        </Space>
      </Form.Item>
    </Container>
  )
}
