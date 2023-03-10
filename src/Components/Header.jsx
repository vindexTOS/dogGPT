import React from 'react'

function Header(props) {
  return (
    <header className="w-[100vw] flex flex-col items-center justify-center border-b-2 border-gray-600">
      <h1 className="text-[2rem] text-white font-bold">DogGPT</h1>
      <div className="flex  items-cneter  justify-center">
        <p className="text-white">
          Ask Me Something And Ill Tell You Cool Dog Fact
        </p>
      </div>
    </header>
  )
}

export default Header
