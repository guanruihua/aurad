import React from 'react'
import { ObjectType } from 'abandonjs'
import { Table } from '..'
import './index.less'
import { columns, dataSource } from './data'
import { Docs } from '@/layout'

const rowSelection = {
  onChange: (selectedRowKeys: string[], selectedRows: ObjectType<any>[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    )
  },
  getCheckboxProps: (record: ObjectType<any>) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
  }),
}

export default function () {
  return (
    <Docs
      items={[
        {
          title: 'Table(default)',
          children: <Table columns={columns} dataSource={dataSource} />,
        },
        {
          title: 'Table(noBorder)',
          children: (
            <Table noBorder columns={columns} dataSource={dataSource} />
          ),
        },
        {
          title: 'Table(Empty)',
          children: (
            <Table columns={columns} />
          ),
        },
        {
          title: 'Table',
          children: (
            <Table
              serialNumber
              rowSelection={rowSelection}
              columns={columns}
              dataSource={dataSource}
            />
          ),
        },
      ]}
    />
  )
}
