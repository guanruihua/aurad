import React from 'react'
import { createRoot } from 'react-dom/client'

// import { Button, Tab } from '../dist/index.mjs'
import { Button, Tab } from '../dist/index.js'
import '../dist/style.css'
// import a, { Button } from '../dist/index.js'

function App() {
  // console.log(Button)
  // console.log(a, Button)
  return (
    <div>
      <Button type='primary'>123</Button>
      {/* <Tab /> */}
      <Tab
        items={[
          { title: 'title1', key: '1', children: 'content1' },
          { title: 'title2', key: '2', children: 'content2' }
        ]}
      />
      {/* <Tab items={[{ title: '1', key: '1', children: '1' }]} /> */}
    </div>
  )
}
createRoot(document.getElementById('root')!).render(<App />)
