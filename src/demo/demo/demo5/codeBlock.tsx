import React, { useEffect, useRef, useState } from 'react'
import hljs from './hljs'

import 'highlight.js/styles/default.css'

export function CodeBlock({ language, code }: any) {
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    if (preRef.current instanceof HTMLElement) {
      preRef.current.removeAttribute('data-highlighted')
      hljs.highlightElement(preRef.current)
      hljs.highlightAll()
    }
  }, [code])

  return (
    <div className="code-block" style={{ position: 'relative' }}>
      <pre ref={preRef} className={language}>
        <code>{code}</code>
      </pre>
    </div>
  )
}
