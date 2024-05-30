import React from 'react'
import { Modal } from './modal'
import { CustomPortal } from './CustomPortal'

export default function () {
  return (
    <div>
      <button
        onClick={() => {
          Modal.success({
            title: 'Modal',
            content: 'Hello World !',
            onCancel: () => {
              console.log('Cancel')
            },
            onOk: () => {
              console.log('Ok')
            }
          })
        }}>
        open
      </button>
      <CustomPortal />
    </div>
  )
}
