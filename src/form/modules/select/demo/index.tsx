import React from 'react'
import { Card, Docs, Grid } from '@/layout'
import SelectFormDemo from './form'
import { Select } from '..'
import { options } from './data'
import { Table } from '@/dataGraph'

export default () => (
  <Docs
    items={[
      {
        title: '基础使用',
        children: (
          <div style={{ height: 50, overflow: 'hidden' }}>
            <Select
              options={options}
              placeholder='name'
              onChange={(e) => {
                console.log('基础使用', e.target.value)
              }}
            />
          </div>
        ),
      },
      {
        title: '多选',
        children: (
          <Select
            mode='multiple'
            value={['lucy1']}
            options={options}
            placeholder='name'
            onChange={(e) => {
              console.log('多选', e.target.value)
            }}
          />
        ),
      },
      {
        title: '禁用',
        children: <Select disabled placeholder='name' options={options} />,
      },
      {
        title: 'Select Multiple',
        children: (
          <Table
            columns={[
              { title: 'Component', prop: 'component' },
              // { title: 'Props', prop: 'prop' },
              { title: 'Description', prop: 'desc' },
            ]}
            dataSource={
              [
                // {
                //   component: (
                //     <Card title='基础使用'>
                //       <Select
                //         mode='multiple'
                //         defaultValue={['lucy1', 'lucy2', 'lucy1']}
                //         options={options}
                //         placeholder='name'
                //       />
                //     </Card>
                //   ),
                // },
                // {
                //   component: (
                //     <Card title='基础使用'>
                //       <Select
                //         mode='multiple'
                //         defaultValue={[
                //           'lucy1',
                //           'lucy2',
                //           'lucy1',
                //           'lucy2',
                //           'lucy1',
                //           'lucy2',
                //           'lucy1',
                //           'lucy2',
                //         ]}
                //         options={options}
                //         placeholder='name'
                //       />
                //     </Card>
                //   ),
                // },
                // {
                //   component: (
                //     <Card title='禁用'>
                //       <Select
                //         mode='multiple'
                //         disabled
                //         placeholder='name'
                //         options={options}
                //       />
                //     </Card>
                //   ),
                // },
                // {
                //   component: (
                //     <Grid columns={3}>
                //       <Card title='基础使用'>
                //         <Select
                //           mode='multiple'
                //           defaultValue={['lucy1', 'lucy2', 'lucy1']}
                //           options={options}
                //           placeholder='name'
                //         />
                //       </Card>
                //       <Card title='基础使用'>
                //         <Select
                //           mode='multiple'
                //           defaultValue={[
                //             'lucy1',
                //             'lucy2',
                //             'lucy1',
                //             'lucy2',
                //             'lucy1',
                //             'lucy2',
                //             'lucy1',
                //             'lucy2',
                //           ]}
                //           options={options}
                //           placeholder='name'
                //         />
                //       </Card>
                //       <Card title='禁用'>
                //         <Select
                //           mode='multiple'
                //           disabled
                //           placeholder='name'
                //           options={options}
                //         />
                //       </Card>
                //     </Grid>
                //   ),
                // },
              ]
            }
          />
        ),
      },
      // {
      //   title: 'Select & Form',
      //   children: <SelectFormDemo />,
      // },
    ]}
  />
)
