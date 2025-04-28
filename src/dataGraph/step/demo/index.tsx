import React from 'react'
import { Step } from '..'
import { Docs, Grid, Flex } from '@/layout'
import { Button } from '@/form'

export default function () {
  const [stepBarValue, setVal] = React.useState(460)

  return (
    <Docs
      items={[
        {
          title: 'Step',
          children: <Step items={['a1', 'a2', 'a3', 'a4', 'a5']} />,
        },
        {
          title: 'StepBar',
          children: (
            <Grid>
              <Flex>
                <Button onClick={() => setVal((v) => v + 10)}>add 10 </Button>
                <Button onClick={() => setVal((v) => v - 10)}>add -10 </Button>
                <Button onClick={() => setVal((v) => v + 100)}>add 100 </Button>
                <Button onClick={() => setVal((v) => v - 100)}>add -100</Button>
              </Flex>
              <Step.Bar
                value={stepBarValue}
                items={[
                  { value: 0 },
                  {
                    value: 100,
                    label: 'Bronze',
                  },
                  {
                    value: 500,
                    label: 'Silver',
                  },
                  {
                    value: 1000,
                    label: 'Gold',
                  },
                  {
                    value: 2000,
                    label: 'Diamond',
                  },
                ]}
              />
            </Grid>
          ),
        },
      ]}
    />
  )
}
