import React from 'react'
import { Checkbox } from '..'
import { Form, FormItem, useForm } from '@/form/core'
import { Docs, Flex } from '@/layout'
import { Button } from '../../button'

export default function () {
  const form = useForm()

  return (
    <Docs>
      <Form
        form={form}
        onSubmit={(form) => {
          console.log(form.getValues())
        }}>
        <Form.Item label='box1' name='box1'>
          <Checkbox>box1</Checkbox>
        </Form.Item>
        <Form.Item label='box2' name='box2'>
          <Checkbox
            options={[
              { label: 'Aaa', value: 'aaa' },
              { label: 'Bbb', value: 'bbb' },
              { label: 'Ccc', value: 'c', disabled: true },
            ]}
          />
        </Form.Item>
        <FormItem>
          <Flex>
            <Button htmlType='submit'>Submit</Button>
            <Button htmlType='reset'>Reset</Button>
            <Button onClick={() => form.setValue('box1', true)}>
              Form Set value
            </Button>
            <Button onClick={() => form.setValue('box2', ['aaa', 'c'])}>
              Form Set value
            </Button>
          </Flex>
        </FormItem>
      </Form>
    </Docs>
  )
}
