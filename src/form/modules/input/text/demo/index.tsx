import React from 'react'
import { Form, FormItem, useForm, Button, Input } from '@/form'
import { Docs, Flex } from '@/layout'

export default function () {
  const form = useForm({
    rules: {
      name: [{ required: true, message: '不可以为空' }],
      name3: [{ required: true, message: '不可以为空' }],
      name4: [{ required: true, message: '不可以为空' }],
    },
  })

  return (
    <Docs
      items={[
        {
          title: 'Input',
          children: (
            <Form
              form={form}
              initialValues={{
                name: '123',
              }}
              onSubmit={() => {
                console.log(form.values)
                // console.log(form.getValues())
              }}>
              <FormItem label='name (text)' name='name'>
                <Input />
              </FormItem>
              <FormItem label='name2 (text)' name='name2'>
                <Input />
              </FormItem>
              <FormItem label='name2 (text)' name='name3'>
                <Input />
              </FormItem>
              <FormItem label='name4 (text)' name='name4'>
                <Input />
              </FormItem>
              <FormItem>
                <Flex>
                  <Button htmlType='submit'>Submit</Button>
                  <Button htmlType='reset'>Reset</Button>
                  <Button onClick={() => form.clearValues()}>Clear</Button>
                  <Button onClick={() => form.validateFields()}>
                    Validate
                  </Button>
                  <Button onClick={() => form.setValue('name', 'new Value')}>
                    Form Set Value
                  </Button>
                  <Button
                    onClick={() =>
                      form.setValues({
                        name: 'new value 1',
                        name2: 'new value 2',
                      })
                    }>
                    Form Set Values
                  </Button>
                </Flex>
              </FormItem>
            </Form>
          ),
        },
      ]}
    />
  )
}
