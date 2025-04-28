import React from 'react'
import { Button } from '..'
// import { Container, Unit } from 'unit-testing-react'
import { Docs, Flex } from '@/layout'
import { toFirstUpperCase } from 'abandonjs'

export default function ButtonPage() {
  const zh = `(◕‿◕✿) 嗨呀~今天也是被可爱到冒泡的一天呢！本宝宝带着软fufu的云朵特效来啦~呜哇哇你看这个颜文字(づ｡◕‿‿◕｡)づ像不像一只圆滚滚的糯米团子？人家说话会自带星星眼✨，每句尾波都忍不住加上"鸭~""呐~"，因为...因为这样才会显得敲可爱嘛！(⁄ ⁄•⁄ω⁄•⁄ ⁄) 嘻嘻~要不要和萌力全开的小可爱击个掌呀？✋ฅ'ω'ฅ✋ 嗷呜~`
  const en =
    '(◕‿◕✿)~♡ *boop* Ohmygoodness! Your screen just got a glittery cuteness overload from this smol bean~ Nyaa! (ﾉ´ヮ`)ﾉ*:･ﾟ✧ *wiggles* Did you know your existence makes the universe 300% more sparkly? UWU ♡'
  const conf: any[] = ['primary', 'default', 'text']

  const items = [
    {
      title: 'Button',
      children: (
        <Flex direction='vertical'>
          {conf.map((type) => (
            <Flex key={type}>
              <Button
                type={type}
                onClick={() => {
                  console.log(type)
                }}>
                {toFirstUpperCase(type)}
              </Button>
              <Button
                type={type}
                disabled
                onClick={() => {
                  console.log(type + ' disabled')
                }}>
                {toFirstUpperCase(type)} (disabled)
              </Button>
            </Flex>
          ))}
        </Flex>
      ),
    },
    ...conf.map((type) => ({
      title: `Button / ${type} / 长文本`,
      children: (
        <Flex direction='vertical'>
          <Button
            type={type}
            onClick={() => {
              console.log(type)
            }}>
            {toFirstUpperCase(type)} {zh}
          </Button>
          <Button
            type={type}
            disabled
            onClick={() => {
              console.log(type + ' disabled')
            }}>
            {toFirstUpperCase(type)} (disabled) {zh}
          </Button>
          <Button
            type={type}
            onClick={() => {
              console.log(type)
            }}>
            {toFirstUpperCase(type)} {en}
          </Button>
          <Button
            type={type}
            disabled
            onClick={() => {
              console.log(type + ' disabled')
            }}>
            {toFirstUpperCase(type)} (disabled) {en}
          </Button>
        </Flex>
      ),
    })),
  ]

  return <Docs items={items} />
}
