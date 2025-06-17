import React from 'react'
import { Split } from '..'
import { Docs } from '@/layout/docs'
import { Flex } from '@/layout/flex'
import { Table } from '@/dataGraph'
import { getTableColumns } from '@/demo'

export default function () {
  return (
    <Docs
      items={[
        {
          title: 'Split [ left, right ]',
          children: (
            <Flex>
              <Split
                items={[
                  <Flex
                    center
                    alginCenter
                    style={{
                      minWidth: 200,
                      height: 100,
                      width: '100%',
                      background: '#444',
                    }}>
                    Left
                  </Flex>,
                  <Flex
                    center
                    alginCenter
                    style={{
                      minWidth: 100,
                      height: 100,
                      width: '100%',
                      background: '#444',
                    }}>
                    right
                  </Flex>,
                ]}
              />
            </Flex>
          ),
        },
        {
          title: 'Props',
          children: (
            <Table
              columns={getTableColumns()}
              dataSource={[
                {
                  prop: 'leftMinWidth',
                  desc: '左边最小宽度',
                  type: 'number | {number}px | {number}%',
                  default: '20%',
                },
                {
                  prop: 'rightMinWidth',
                  desc: '右边最小宽度',
                  type: 'number | {number}px | {number}%',
                  default: '20%',
                },
                {
                  prop: 'gap',
                  desc: '拖拽分割线的宽度',
                  type: 'number',
                  default: '10',
                },
                {
                  prop: 'items',
                  desc: '渲染节点',
                  type: '[React.ReactNode, React.ReactNode]',
                  default: 'null',
                },
                {
                  prop: 'className',
                  desc: 'className',
                  type: 'classNameType',
                  default: '',
                },
              ]}
            />
          ),
        },
      ]}
    />
  )
}
