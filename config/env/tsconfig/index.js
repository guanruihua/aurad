import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function switchTSConfig(env = 'dev') {
  // console.log({ env })
  fs.copyFileSync(
    path.resolve(__dirname, `./${env}.json`),
    path.resolve(__dirname, `../../../tsconfig.json`),
    // './tsconfig.json',
    0
  )
}
// const fs = require('fs')
// const path = require('path')

// module.exports = function switchTSConfig(env = 'dev') {
// 	fs.copyFileSync(
// 		path.resolve(__dirname, `./${env}.json`), './tsconfig.json', 0)
// }
