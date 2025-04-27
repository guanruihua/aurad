import React from 'react'
import { Select } from '..'
import { options } from './data'
import { Container, Unit } from 'unit-testing-react'

export default function () {
  return (
    <Container columns={3} gap={10} grid>
      <Unit className='unit' title='基础使用'>
        <Select options={options} placeholder='name' />
      </Unit>

      <Unit className='unit' title='基础使用'>
        <Select options={options} placeholder='name' onChange={() => {}} />
      </Unit>
      <Unit className='unit' title='基础使用(value)'>
        <Select value={'lucy1'} options={options} placeholder='name' />
      </Unit>
      <Unit className='unit' title='禁用'>
        <Select disabled placeholder='name' options={options} />
      </Unit>

      {/* <Unit className="unit" title="打开下拉框">
			<Select
				options={options}
				placeholder='name'
				open={true}
			/>
		</Unit> */}
    </Container>
  )
}
