import React from 'react'
import { TextArea } from '..'
import { Form, FormItem, useForm } from '@/form/core'
import { Docs, Space } from '@/layout'
import { Button } from '../../button'

export default function TextAreaPage() {
  const form = useForm()
  return (
    <Docs
      items={[
        { title: 'TextArea', children: <TextArea /> },
        {
          title: 'TextArea(autoZoom)',
          children: <TextArea autoZoom />,
        },
        {
          title: 'TextArea(Form)',
          children: (
            <Form
              form={form}
              onSubmit={(form) => {
                form.validateFields()
                console.log(form.getValues())
              }}>
              <FormItem
                name='name'
                rules={[{ required: true, message: '不可以为空' }]}>
                <TextArea placeholder='name' />
              </FormItem>
              <FormItem name='name2'>
                <TextArea placeholder='name2' />
              </FormItem>
              <FormItem>
                <Space>
                  <Button htmlType='submit'>Submit</Button>
                  <Button htmlType='reset'>Reset</Button>
                  <Button onClick={() => form.setValue('name', 'new Value')}>
                    Form Set value
                  </Button>
                </Space>
              </FormItem>
            </Form>
          ),
        },
      ]}
    />
  )
}
