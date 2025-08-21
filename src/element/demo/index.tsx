import React from 'react'
import { Docs, Flex } from '@/layout'
import { Table } from '@/dataGraph'
import { Ul } from '..'
import { getTableColumns } from '@/demo'

export default function () {
  return (
    <Docs
      items={[
        {
          title: '原生属性拓展',
          children: (
            <Flex column>
              <p>拓展的标签: </p>
              <Ul items={[`div => Div`, `span => Span`, `p => P`, `ul => UL`, `ol => Ol`]} />
              <Table
                columns={getTableColumns()}
                dataSource={[
                  {
                    prop: 'none',
                    desc: 'true => display: none !important;',
                    type: 'boolean',
                    default: 'false',
                  },
                  {
                    prop: 'hidden',
                    desc: 'true => visibility: hidden !important; position: fixed;',
                    type: 'boolean',
                    default: 'false',
                  },
                  {
                    prop: 'disabled',
                    desc: 'true =>   cursor: not-allowed; filter: brightness(...);',
                    type: 'boolean',
                    default: 'false',
                  },
                  {
                    prop: 'className',
                    desc: '支持 String, Array, Object 的 className',
                    type: 'ClassNameType',
                    default: '',
                  },
                  {
                    prop: 'classNames',
                    desc: '支持 String, Array, Object 的 className',
                    type: 'ClassNameType',
                    default: '',
                  },
                ]}
              />
            </Flex>
          ),
        },
      ]}
    />
  )
}
