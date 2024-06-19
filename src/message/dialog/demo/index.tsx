import React, { useState } from 'react'
import { Button } from '@/form'
import { Space } from '@/layout'
import { Dialog } from '..'
import { Container, Unit } from 'unit-testing-react'

export default function DialogPage() {
  const [open, setOpen] = useState<boolean>(true)
  // const [open, setOpen] = useState<boolean>(false)

  return (
    <Container>
      <Unit>
        <Space>
          <Button
            onClick={() => {
              setOpen(true)
            }}>
            open
          </Button>
          <Button
            onClick={() => {
              setOpen(false)
            }}>
            close
          </Button>
        </Space>
        <Dialog
          title={'Title xxx'}
          maskClosable
          hiddenCancel
          onCancel={() => {
            setOpen(false)
          }}
          open={open}>
          <div>
            <h4>WHERE IN THE WORLD</h4>
            <p>Mount Greylock, Massachusetts, North America</p>
            <h4>TYPE</h4>
            <p>School of witchcraft and wizardry</p>
            <h4>RESIDENTS OR OWNERS</h4>
            <p>
              Founded by Isolt Sayre, James Steward, Chadwick Boot and Webster
              Boot
            </p>
            <h4>MAGICAL PROPERTIES</h4>
            <p>
              Enchanted carvings of the four house beasts that react in the
              presence of new students
            </p>
          </div>
        </Dialog>
      </Unit>
    </Container>
  )
}
