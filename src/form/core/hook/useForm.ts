import { useMap, useSetState } from '@/assets'
import { ObjectType } from '0type'
import { Rule, UseFormProps, type UseForm } from './type'
import { useState } from 'react'
import { validateField } from '../validate'
import { isArray } from 'asura-eye'

export function useForm(props: UseFormProps = {}): UseForm {
  const { rules = {} } = props
  const [fields, fieldAction] = useMap<
    string,
    {
      name?: string
      rules?: Rule[]
      [key: string]: any
    }
  >([])

  const [initialValues, setInitialValues] = useState<ObjectType>({})
  const [values, setValues, clearValues] = useSetState<ObjectType>({})
  const [error, setError, resetError] = useSetState<ObjectType>(
    {},
  )

  const allFieldNames: string[] = Array.from(fields.keys())
  const getRule = (name: string) => fields.get(name)?.rules || rules[name]

  // console.log(initialValues, values)

  return {
    fields,
    fieldAction,
    rules,
    initialValues,
    setInitialValues,
    values,
    clearValues,
    setValues(values: ObjectType) {
      setValues(values)
      const names = Object.keys(values)
      if (names.length) {
        const newError: ObjectType = {}
        names.forEach((name) => {
          newError[name] = validateField(name, values[name], getRule(name))
        })
        setError(newError)
      }
    },
    error,
    setError,
		resetError,
    setValue: (name: string, value: any) => {
      setValues({ [name]: value })
      getRule(name) &&
        setError({
          [name]: validateField(name, value, getRule(name)),
        })
    },
    getValue: (name: string) => values[name],
    getValues: (names?: string[]) => {
      if (names) {
        const result: ObjectType = {}
        names.forEach((name) => {
          result[name] = values[name]
        })
        return result
      } else {
        return values
      }
    },
    validateField: (name: string, value: any) => {
      if (!allFieldNames.includes(name)) return {}
      setError({
        [name]: validateField(name, value, getRule(name)),
      })
      return {}
    },
    validateFields(names?: string[]) {
      const newError: ObjectType = {}
      if (names) {
        names.forEach((name) => {
          if (allFieldNames.includes(name)) {
            newError[name] = validateField(
              name,
              values[name],
              getRule(name),
            )
          }
        })
      } else {
        allFieldNames.forEach((name) => {
          newError[name] = validateField(name, values[name], getRule(name))
        })
      }
      setError(newError)
      return {}
    },
    resetFields: (names?: string[]) => {
      resetError(names)
      if (names && isArray(names)) {
        const newValues: ObjectType = {}
        names.forEach((name: string) => {
          newValues[name] = initialValues[name]
        })
        setValues(newValues, true)
      } else {
        setValues(initialValues, true)
      }
    },
  }
}
