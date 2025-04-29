import React from 'react'
import { classNames, ClassNameType } from 'harpe'
import { Icon } from '@/icon'
import { StepBar } from '../bar'
import './index.less'
import './night.less'

export interface StepProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: ClassNameType
  direction?: 'horizontal' | 'vertical'
  initial?: number
  items:
    | ({
        status?: 'wait' | 'process' | 'finish' | 'error'
        value?: any
        className?: ClassNameType
      } & Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>[])
    | string[]
}

const IconStatus: Record<string, React.ReactNode> = {
  wait: <Icon type='block' />,
  process: (
    <div
      className='icon'
      style={{
        width: 30,
        height: 30,
        // background: 'var(--disabled-color)',
        borderRadius: '50%',
        border: 'none',
      }}
    />
  ),
  finish: <Icon type='yes' />,
  error: <Icon type='no' />,
}

export function Step(props: StepProps) {
  const { items, className, children, style, ...rest } = props

  const count = items?.length || 0
  const newStyles: React.CSSProperties = {
    gridTemplateColumns: `auto ${new Array(count - 1)
      .fill('1fr auto')
      .join(' ')}`,
    ...style,
  }

  return (
    <div
      className={classNames(className, 'au-step')}
      style={newStyles}
      {...rest}>
      {items?.map((item: any, index: number) => {
        const {
          status = 'process',
          className,
          children,
          ...rest
        } = item.props || {}
        return (
          <React.Fragment key={index}>
            {index > 0 && <div className={classNames('au-step-item-line')} />}
            <div
              className={classNames('au-step-item ' + status, className)}
              {...rest}>
              <div className={'au-step-item-icon'}>
                {IconStatus[status as any]}
              </div>
              <div className={'au-step-item-content'}>{children}</div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

Step.Bar = StepBar
