import React from 'react'
import { classNames } from 'harpe'
import { InputProps, InputChangeEvent } from '../type'
import './index.less'
import { isEffectArray, isEmpty } from 'asura-eye'
import { type ObjectType } from '0type'
import { Icon } from '@/icon'

export function InputTag(props: InputProps) {
  // const { className, onChange, ...rest } = props

  const {
    value: originValue = [],
    defaultValue,
    className,
    onBlur,
    onChange = () => {},
    ...rest
  } = props

  const [value, setValue] = React.useState<string>('')

  const [list, setList] = React.useState<ObjectType[]>([])
  const del = (item: ObjectType) => {
    setList(
      list.filter((unit) => {
        if (!isEmpty(unit.id) && unit.id === item.id) return false
        return true
      })
    )
  }

	React.useEffect(() => {
		if (originValue === value) return;
		if (isEmpty(originValue) || originValue === '') {
			setValue('')
			return
		}
    console.log(originValue)
		// if (isNumber(originValue)) {
		// 	setValue(originValue)
		// 	return
		// }
	}, [originValue])


  const uId = () => new Date().getTime() + '_' + list.length

  return (
    <div className={classNames('au-input-tags', className)}>
      {isEffectArray(list) &&
        list.map((item: any) => {
          const { value, id, label = '' } = item
          return (
            <div className='au-input-tags-item' title={label} key={id || value}>
              {label}
              <Icon type='close' onClick={() => del(item)} />
            </div>
          )
        })}
      <input
        value={value}
        inputMode='text'
        onChange={(e: InputChangeEvent) => {
          onChange && onChange(e)
          setValue(e.target.value)
        }}
        onKeyUp={(e) => {
          if (isEmpty(value) || value === '') return
          if (e.code === 'Enter') {
            setList([
              ...list,
              {
                id: uId() + value,
                value: value,
                label: value
              }
            ])
            setValue('')
          }
        }}
        // {...rest}
      />
    </div>
  )
}
