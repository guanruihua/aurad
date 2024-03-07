import React from 'react'
import { Radio } from '..'
import { Container, Unit } from 'unit-testing-react'
import { Space } from '@/layout'
import { Form, useForm, FormItem } from '@/form'
import { Button } from '../../button'
import { RadioChangeEvent } from '../type'

export default function () {
  const form = useForm()

  return (
    <Container>
      <Unit title="Radio with Form">
        <Form
          form={form}
          onSubmit={(form) => {
            console.log(form.values)
          }}
        >
          <FormItem name="a1">
            <Radio>a1</Radio>
          </FormItem>
          <FormItem name="b1">
            <Radio>b1</Radio>
          </FormItem>
          <FormItem name="cc">
            <Radio
              options={[
                { value: 'c1', label: 'c1' },
                { value: 'c2', label: 'c2' },
                { value: 'c3', label: 'c3' },
                { value: 'c4', label: 'c4' },
              ]}
            />
          </FormItem>
          <Space>
            <Button htmlType="submit">Submit</Button>
            <Button htmlType="reset">Reset</Button>
            <Button onClick={() => form.setValue('a1', true)}>set val</Button>
            <Button onClick={() => form.setValue('cc', 'c1')}>set val</Button>
          </Space>
        </Form>
      </Unit>
      <Unit title="Radio">
        <Radio>Default</Radio>
        <Radio value={true}>Value</Radio>
        <Radio label="Label"></Radio>
      </Unit>
      <Unit title="RadioGroup(type=radio)">
        <Radio
          value={{}}
          options={[
            { value: 'a1', label: 'a1' },
            { value: 'a2', label: 'a2' },
            { value: 'a3', label: 'a3' },
            { value: {}, label: 'a3' },
          ]}
        />
      </Unit>
    </Container>
  )
}
