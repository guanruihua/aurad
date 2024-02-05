import React from 'react'

function rgbToHex(r: number, g: number, b: number): string {
  var hex = ((r << 16) | (g << 8) | b).toString(16)
  return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex
}

function hexToRgb(hex: string): number[] {
  const rgb: number[] = []
  hex = hex.length === 4 ? hex.concat(hex.substring(1)) : hex
  for (var i = 1; i < 7; i += 2) {
    rgb.push(parseInt('0x' + hex.slice(i, i + 2)))
  }
  return rgb
}

function gradient(startColor: string, endColor: string, step = 1) {
  //将hex转换为rgb
  let sColor = hexToRgb(startColor)
  let eColor = hexToRgb(endColor)

  //计算R\G\B每一步的差值
  let rStep: number = (eColor[0] - sColor[0]) / step
  let gStep: number = (eColor[1] - sColor[1]) / step
  let bStep: number = (eColor[2] - sColor[2]) / step

  const gradientColorArr: string[] = []
  for (let i = 0; i < step; i++) {
    //计算每一步的hex值
    gradientColorArr.push(
      rgbToHex(
        parseInt(rStep * i + sColor[0] + ''),
        parseInt(gStep * i + sColor[1] + ''),
        parseInt(bStep * i + sColor[2] + ''),
      ),
    )
  }
  return gradientColorArr
}

export default function () {
  console.log(gradient('#fff', '#000', 10))
  const CMM = (c: string) => (
    <div
      key = {c}
      style={{
        display: 'inline-block',
        width: 50,
        height: 50,
        background: c,
      }}
    ></div>
  )
  return <div>{gradient('#fff', '#000', 24).map((c) => CMM(c))}</div>
}
