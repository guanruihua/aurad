import React from 'react'
import { Card, Docs, Flex, Grid } from '@/layout'
import SelectFormDemo from './form'
import { Select } from '..'
import { options } from './data'
import { Table } from '@/dataGraph'
import { Button } from '../../button'
import { Div } from '@/element'

export default () => {
  const [value, setValue] = React.useState<string | undefined>(undefined)
  const [values, setValues] = React.useState<undefined | string[]>([])
  return (
    <Docs
      items={[
//         {
//           title: '单选',
//           items: [
//             {
//               title: '基本使用',
//               children: (
//                 <Select
//                   options={options}
//                   placeholder='name'
//                   onChange={(e) => {
//                     console.log('基础使用 / value', e.target.value)
//                   }}
//                 />
//               ),
//             },
//             {
//               title: 'defaultValue',
//               children: (
//                 <Select
//                   defaultValue={'value-xyy-3'}
//                   options={options}
//                   placeholder='name'
//                   onChange={(e) => {
//                     console.log('defaultValue / value', e.target.value)
//                   }}
//                 />
//               ),
//             },
//             {
//               title: 'defaultValue + value + onChange',
//               children: (
//                 <Grid>
//                   <Select
//                     defaultValue={'value-xyy-3'}
//                     value={value}
//                     options={options}
//                     placeholder='name'
//                     onChange={(e) => {
//                       console.log(
//                         'defaultValue + value + onChange / value',
//                         e.target.value,
//                       )
//                       setValue(e.target.value)
//                       // setValue('value-xyy-1') // 会使值一直为 value-xyy-1
//                     }}
//                   />
//                   <Flex>
//                     <Button onClick={() => setValue('value-xyy-1')}>
//                       Set Value value-xyy-1
//                     </Button>
//                     <Button onClick={() => setValue('value-xyy-4')}>
//                       Set Value value-xyy-4
//                     </Button>
//                     <Button onClick={() => setValue('')}>
//                       Set Value Empty
//                     </Button>
//                   </Flex>
//                 </Grid>
//               ),
//               code: `const [value, setValue] = React.useState<string | undefined>(undefined)
// const options = ${JSON.stringify(options, null, 2)}

// <Select
//   defaultValue={'value-xyy-3'}
//   value={value}
//   options={options}
//   placeholder='name'
//   onChange={(e) => {
//     setValue(e.target.value)
//     // setValue('value-xyy-1') // 会使值一直为 value-xyy-1
//   }}
// />`,
//             },
//           ],
//         },
        {
          title: '多选',
          items: [
            {
              title: '基本使用',
              children: (
                <Select
                  multiple
                  options={options}
                  placeholder='name'
                  onChange={(e) => {
                    console.log('基础使用 / value', e.target.value)
                  }}
                />
              ),
            },
            {
              title: 'defaultValue',
              children: (
                <Select
                  multiple
                  defaultValue={['value-xyy-3', 'value-xyy-6']}
                  options={options}
                  placeholder='name'
                  onChange={(e) => {
                    console.log('defaultValue / value', e.target.value)
                  }}
                />
              ),
            },
            {
              title: 'defaultValue long',
              children: (
                <Select
                  multiple
                  defaultValue={[
                    'value-xyy-1',
                    'value-xyy-2',
                    'value-xyy-3',
                    'value-xyy-4',
                    'value-xyy-5',
                    'value-xyy-6',
                    'value-xyy-7',
                    'value-xyy-8',
                  ]}
                  options={options}
                  placeholder='name'
                  onChange={(e) => {
                    console.log('defaultValue / value', e.target.value)
                  }}
                />
              ),
            },
            {
              title: 'defaultValue + value + onChange',
              children: (
                <Grid>
                  <Select
                    multiple
                    defaultValue={['value-xyy-3']}
                    value={values}
                    options={options}
                    placeholder='name'
                    onChange={(e) => {
                      console.log(
                        'defaultValue + value + onChange / value',
                        e.target.value,
                      )
                      setValues(e.target.value)
                      // setValues(['value-xyy-1']) // 会使值一直为 ['value-xyy-1']
                    }}
                  />
                  <Flex>
                    <Button
                      onClick={() => setValues(['value-xyy-1', 'value-xyy-2'])}>
                      {`Set Value ['value-xyy-1', 'value-xyy-2']`}
                    </Button>
                    <Button
                      onClick={() => setValues(['value-xyy-3', 'value-xyy-4'])}>
                      {`Set Value ['value-xyy-3', 'value-xyy-4']`}
                    </Button>
                    <Button onClick={() => setValues([])}>
                      Set Value Empty
                    </Button>
                  </Flex>
                </Grid>
              ),
              code: `const [value, setValue] = React.useState<string | undefined>(undefined)
const options = ${JSON.stringify(options, null, 2)}

<Select
  defaultValue={'value-xyy-3'}
  value={value}
  options={options}
  placeholder='name'
  onChange={(e) => {
    setValue(e.target.value)
    // setValue('value-xyy-1') // 会使值一直为 value-xyy-1
  }}
/>`,
            },
          ],
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
              dataSource={[]}
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
}
