import React from 'react'
import Header from './Header'
import Chat from './Chat'
import InputChat from './InputChat'
function Body(props) {
  return (
    <div className="bg-[#343541] flex flex-col h-screen justify-between ">
      <Header />
      <Chat />
      <InputChat />
    </div>
  )
}

export default Body
