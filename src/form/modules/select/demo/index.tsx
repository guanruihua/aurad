import React from 'react'
import { Card, Docs, Grid } from '@/layout'
import SelectFormDemo from './form'
import SelectSimpleDemo from './simple'
import { Select } from '..'
import { options } from './data'
import { Table } from '@/dataGraph'

export default () => (
  <Docs
    items={[
      {
        title: 'Select (Simple)',
        children: <SelectSimpleDemo />,
      },
      {
        title: 'Select Multiple',
        children: (
          <Table
            columns={[
              { title: 'Component', prop: 'component' },
              { title: 'Props', prop: 'prop' },
              { title: 'Description', prop: 'desc' },
            ]}
            dataSource={[
              {
                component: (
                  <Grid columns={3}>
                    <Card title='基础使用'>
                      <Select
                        mode='multiple'
                        defaultValue={['lucy1', 'lucy2', 'lucy1']}
                        options={options}
                        placeholder='name'
                      />
                    </Card>
                    <Card title='基础使用'>
                      <Select
                        mode='multiple'
                        defaultValue={[
                          'lucy1',
                          'lucy2',
                          'lucy1',
                          'lucy2',
                          'lucy1',
                          'lucy2',
                          'lucy1',
                          'lucy2',
                        ]}
                        options={options}
                        placeholder='name'
                      />
                    </Card>
                    <Card title='禁用'>
                      <Select
                        mode='multiple'
                        disabled
                        placeholder='name'
                        options={options}
                      />
                    </Card>
                  </Grid>
                ),
              },
            ]}
          />
        ),
      },
      {
        title: 'Select & Form',
        children: <SelectFormDemo />,
      },
    ]}
  />
)
