import React from "react"

export interface OTPInputProps {
  [key: string]: any
}

export function OTPInput(props: OTPInputProps){
  const {} = props
  return (
    <div>
      OTPInput
      {JSON.stringify(Object.keys(props))}
    </div>
  )
}
