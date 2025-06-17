import React from 'react'
import { ClassNameType, classNames as _classNames } from 'harpe'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeBlockProps {
  code: string
  language: string
  showLineNumbers?: boolean
}

const CodeBlock = ({
  code,
  language,
  showLineNumbers = true,
}: CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={atomDark}
      showLineNumbers={showLineNumbers}
      wrapLines={true}
      customStyle={{
        margin: '0',
        padding: '1rem',
        borderRadius: '0.5rem',
        backgroundColor: '#1e1e1e',
      }}>
      {code}
    </SyntaxHighlighter>
  )
}

export type CodeProps = {
  code: string
  hidden?: boolean
  none?: boolean
  className?: ClassNameType
  classNames?: ClassNameType
  children?: React.ReactNode
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>

export const Code = (props: CodeProps) => {
  const { code, className, classNames, hidden, none, children, ...rest } = props

  return (
    <div
      className={_classNames(className, classNames, { hidden, none })}
      {...rest}>
      <CodeBlock code={code} language='tsx' />
    </div>
  )
}
