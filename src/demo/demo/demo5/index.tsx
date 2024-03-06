import React from 'react'
import axios from 'axios'
import { logGroup, stringify } from 'abandonjs'
import { useSetState } from '0hook'
import { isArray } from 'asura-eye'
import { CodeBlock } from './codeBlock'
import './index.less'

export default function () {
  const [state, setState] = useSetState({
    templates: [],
    file: 'Empty',
  })
  const load = async () => {
    try {
      const res = await axios({ method: 'get', url: '/vr/gen/query' })
      const res2 = await axios({
        method: 'get',
        url: '/vr/gen/genFile',
        params: {
          name: 'index.vue',
          path: 'C:\\RUIHUA\\npm\\0server\\test\\temp',
        },
      })
      setState({ templates: res.data, file: res2.data })
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    load()
    const timer = setInterval(() => {
      load()
    }, 2000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div className="demo5">
      {isArray(state.templates) &&
        state.templates.map((template) => {
          const { name, data, parameter } = template
          // console.log(template)
          return (
            <div
              key={name}
              style={{ background: '#F3F3F3', borderRadius: 12, padding: 10 }}
            >
              {isArray<string>(parameter) && (
                <div className="parameter">
                  {(parameter as string[]).map((item, i) => {
                    return (
                      <div className="parameter-item" key={i}>
                        {item}
                      </div>
                    )
                  })}
                </div>
              )}
              <CodeBlock language="vue" code={data} />
            </div>
          )
        })}
      <div
        key={state.file}
        style={{ background: '#F3F3F3', borderRadius: 12, padding: 10 }}
      >
        <CodeBlock language="vue" code={state.file} />
      </div>
    </div>
  )
}
