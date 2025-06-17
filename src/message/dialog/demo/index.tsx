import React from 'react'
import { Docs } from '@/layout'
import Demo from './demo'
import { Code } from './code'
import { Table } from '@/dataGraph'
import { getTableColumns } from '@/demo'

export default function DialogPage() {
  return (
    <Docs
      items={[
        {
          title: '基本使用',
          children: <Demo />,
          code: Code,
        },
        {
          title: 'Props',
          children: (
            <Table
              columns={getTableColumns()}
              dataSource={[
                { prop: 'title', type: 'ReactNode', desc: '标题' },
                { prop: 'open', type: 'boolean', desc: '打开弹框' },
                {
                  desc: '取消按钮方法回调',
                  prop: 'onCancel',
                  type: '() => void',
                },
                {
                  desc: '隐藏取消按钮',
                  prop: 'hiddenCancel',
                  type: 'boolean',
                  default: 'false',
                },
                { desc: '确定按钮方法回调', prop: 'onOk', type: '() => void' },
                {
                  desc: '隐藏确定按钮',
                  prop: 'hiddenOk',
                  type: 'boolean',
                  default: 'false',
                },
                {
                  desc: '点击遮罩(蒙层)关闭',
                  prop: 'maskClosable',
                  type: 'boolean',
                  default: 'true',
                },
                {
                  prop: 'children',
                  type: 'ReactNode',
                  desc: '弹框内容',
                },
                { prop: 'className', type: 'ClassNameType', desc: 'className' },
              ]}
            />
          ),
        },
      ]}></Docs>
  )
}
