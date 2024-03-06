import React from 'react'
import { Checkbox } from '..'
import { Container, Unit } from 'unit-testing-react'
import { Form, FormItem, useForm } from '@/form/core'
import { Space } from '@/layout'
import { Button } from '../../button'

export default function () {
  const form = useForm()

  return (
    <Container>
      <Unit>
        <Form
          form={form}
          onSubmit={(form) => {
            console.log(form.getValues())
          }}
        >
          <Form.Item label="box1" name="box1">
            <Checkbox>box1</Checkbox>
          </Form.Item>
          <Form.Item label="box2" name="box2">
            <Checkbox
              options={[
                { label: 'Aaa', value: 'aaa' },
                { label: 'Bbb', value: 'bbb' },
                { label: 'Ccc', value: 'c', disabled: true },
              ]}
            />
          </Form.Item>
          <FormItem>
            <Space>
              <Button htmlType="submit">Submit</Button>
              <Button htmlType="reset">Reset</Button>
              <Button onClick={() => form.setValue('box1', true)}>
                Form Set value
              </Button>
              <Button onClick={() => form.setValue('box2', ['aaa', 'c'])}>
                Form Set value
              </Button>
            </Space>
          </FormItem>
        </Form>
      </Unit>
    </Container>
  )
}
