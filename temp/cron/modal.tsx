import React from 'react'
import { UCronView } from './view'
import { UModal, UseUModal } from '@/components/U-Modal'
import { UInput } from '@/components/U-Input'
import { UCronSelect } from './select'
import { UGrid } from '@/components/U-View'
import { FormattedMessage } from 'umi'
import { validateCron, defaultValue } from './conf'
import { classNames } from '@/utils'

export interface UCronSelectModalProps {
  modal?: UseUModal
  style?: React.CSSProperties
  className?: string
  cb(value: string, close: () => void): void
}

/**
 * @title UCronSelectModal
 * @param {UCronSelectModalProps} props
 * @returns
 */
export const UCronSelectModal = (props: UCronSelectModalProps) => {
  const { modal, cb, ...rest } = props
  const [showValue, setShowValue] = React.useState<string>(defaultValue)
  const [inputValue, setInputValue] = React.useState<string>(defaultValue)
  const [hasError, setHasError] = React.useState<boolean>(false)
  const [UCronSelectKey, setUCronSelectKey] = React.useState<number>(1)

  const { value = defaultValue } = modal.payload
  React.useEffect(() => {
    // console.log(modal.payload)
    if (modal.status.open) {
      setShowValue(value || defaultValue)
      setInputValue(value || defaultValue)
    } else {
      setShowValue(defaultValue)
      setInputValue(defaultValue)
    }
  }, [modal.status.open])

  return (
    <UModal
      title={<FormattedMessage id={'schedule.attr.cronExpression'} />}
      width={'80%'}
      modal={modal}
      onOk={(close) => {
        cb(showValue, close)
      }}
      {...rest}>
      <UGrid className='u-cron-select-modal'>
        <UInput
          value={inputValue}
          className={classNames({ hasError })}
          onChange={(e) => {
            const value = e.target.value
            console.log('inputValue: ', value)
            setInputValue(value)

            if (validateCron(value)) {
              setHasError(false)
              setShowValue(value)
              setUCronSelectKey((v) => v + 1)
            } else {
              setHasError(true)
            }
          }}
        />
        {hasError && (
          <div className={'hasError-warning'}>
            <FormattedMessage id={'schedule.attr.cronExpression.error'} />
          </div>
        )}
        <UCronView key={'UCronView' + UCronSelectKey} value={showValue} style={{ cursor: 'auto' }} />
        <UCronSelect
          key={'UCronSelect' + UCronSelectKey}
          style={{ gridColumn: '1/-1' }}
          value={showValue}
          onChange={(val) => {
            setShowValue(val)
            setInputValue(val)
          }}
        />
      </UGrid>
    </UModal>
  )
}
