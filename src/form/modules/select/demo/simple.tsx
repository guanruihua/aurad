import React from 'react'
import { Select } from '..'
import { options } from './data'
import { Docs } from '@/layout'

export default function () {
  return (
    <Docs
      items={[
        {
          title: '基础使用',
          children: <Select options={options} placeholder='name' />,
        },
        {
          title: '基础使用',
          children: (
            <Select options={options} placeholder='name' onChange={() => {}} />
          ),
        },
        {
          title: '基础使用(value)',
          children: (
            <Select value={'lucy1'} options={options} placeholder='name' />
          ),
        },
        {
          title: '禁用',
          children: <Select disabled placeholder='name' options={options} />,
        },
      ]}
    />
  )
}
