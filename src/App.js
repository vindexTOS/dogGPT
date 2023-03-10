import React from 'react'
import Body from './Components/Body'
import { ContextProvider } from './context'
function App() {
  return (
    <ContextProvider>
      <div className="">
        <Body />
      </div>
    </ContextProvider>
  )
}

export default App
