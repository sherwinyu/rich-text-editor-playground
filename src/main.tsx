import React from 'react'
import ReactDOM from 'react-dom/client'
import NYTProseMirrorEditor from './components/NYTProseMirrorEditor'

const MyTest = () => {
  const [show, setShow] = React.useState(false)
  return <div>
    <button onClick={() => setShow(!show)}>Toggle</button>
    {show && <NYTProseMirrorEditor />}
  </div>
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyTest />
  </React.StrictMode>,
)
