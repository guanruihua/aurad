import React, { useState, ChangeEvent } from 'react'
import { classNames, ClassNameType } from 'harpe'
import './index.less'

export interface TextAreaProps
  extends Omit<React.HTMLAttributes<HTMLTextAreaElement>, 'className'> {
  className?: ClassNameType
  /**
   * @default 1
   * @description 最小行数
   */
  minRow?: number
  /**
   * @default 10
   * @description 最大行数
   */
  maxRow?: number
  [key: string]: any
}

export function TextArea(props: TextAreaProps) {
  const {
    value = '',
    onChange,
    className,
    minRow = 1,
    maxRow = 10,
    style,
    onInput,
    ...rest
  } = props
  const [replicatedValue, setReplicatedValue] = useState<string>(value)

  const ref = React.useRef<HTMLTextAreaElement>(null)

  function getVisualLines(text: string, textarea: HTMLTextAreaElement | null) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx || !textarea) return minRow
    ctx.font = window.getComputedStyle(textarea).font
    const maxWidth = textarea.getBoundingClientRect().width
    let total = 2
    const rows = text.split('\n')

    rows.forEach((row) => {
      const metrics = ctx.measureText(row)
      total += Math.round(metrics.width / maxWidth)
      // console.log(total)
    })
    if (maxRow && maxRow < total) {
      return maxRow
    }
    if (minRow && minRow > total) {
      return minRow
    }
    return total
  }

  React.useEffect(() => {
    if (value !== replicatedValue) {
      setReplicatedValue(value)
    }
  }, [value])

  const rowCount = getVisualLines(replicatedValue, ref.current) || 1

  return (
    <textarea
      ref={ref}
      className={classNames('au-textarea', className)}
      value={replicatedValue}
      rows={rowCount}
      style={{
        height: rowCount * 24,
        ...style,
      }}
      onChange={(e) => onChange?.(e)}
      onInput={(e: ChangeEvent<HTMLTextAreaElement>) => {
        setReplicatedValue(e.target.value || '')
        onInput?.(e)
      }}
      {...rest}
    />
  )
}
