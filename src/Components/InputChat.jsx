import React from 'react'
import { TbSend } from 'react-icons/tb'
import { UseContextEtc } from '../context'
function InputChat(props) {
  const { setUserText, messageSend, userText, ban } = UseContextEtc()

  return (
    <div className="w-[100vw] h-[100px] bg-[#343541] flex items-center justify-center     sticky z-10 backdrop-blur ">
      <div
        className={` ${
          ban ? 'bg-black' : 'bg-[#40414f]'
        } w-[60%] h-[3rem] rounded-[8px] flex items-center `}
      >
        <input
          disabled={ban}
          onKeyDown={(e) => e.key === 'Enter' && messageSend()}
          onChange={(e) => setUserText(e.target.value)}
          value={userText}
          className={` ${
            ban ? 'bg-black' : 'bg-[#40414f]'
          } w-[96%] h-[3rem] rounded-[8px] outline-0 text-white ml-2 `}
          placeholder={`${ban ? ' You Are Banned From This Chat' : ' Talk'}`}
        />

        <TbSend
          onClick={messageSend}
          className="text-gray-400 hover:text-gray-300 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default InputChat
