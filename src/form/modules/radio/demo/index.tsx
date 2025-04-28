import React from 'react'
import { Radio } from '..'
import { Docs, Flex } from '@/layout'
import { Form, useForm, FormItem } from '@/form'
import { Button } from '../../button'
import { RadioChangeEvent } from '../type'

export default function () {
  const form = useForm()

  return (
    <Docs
      items={[
        {
          title: 'Radio with Form',
          children: (
            <Form
              form={form}
              onSubmit={(form) => {
                console.log(form.values)
              }}>
              <FormItem name='a1'>
                <Radio>a1</Radio>
              </FormItem>
              <FormItem name='b1'>
                <Radio>b1</Radio>
              </FormItem>
              <FormItem name='cc'>
                <Radio
                  options={[
                    { value: 'c1', label: 'c1' },
                    { value: 'c2', label: 'c2' },
                    { value: 'c3', label: 'c3' },
                    { value: 'c4', label: 'c4' },
                  ]}
                />
              </FormItem>
              <Flex>
                <Button htmlType='submit'>Submit</Button>
                <Button htmlType='reset'>Reset</Button>
                <Button onClick={() => form.setValue('a1', true)}>
                  set val
                </Button>
                <Button onClick={() => form.setValue('cc', 'c1')}>
                  set val
                </Button>
              </Flex>
            </Form>
          ),
        },
        {
          title: 'Radio',
          children: (
            <>
              <Radio>Default</Radio>
              <Radio value={true}>Value</Radio>
              <Radio label='Label'></Radio>
            </>
          ),
        },
        {
          title: 'RadioGroup(type=radio)',
          children: (
            <Radio
              value={{}}
              options={[
                { value: 'a1', label: 'a1' },
                { value: 'a2', label: 'a2' },
                { value: 'a3', label: 'a3' },
                { value: {}, label: 'a3' },
              ]}
            />
          ),
        },
      ]}
    />
  )
}
