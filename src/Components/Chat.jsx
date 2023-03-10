import React, { useState, useEffect } from 'react'
import { UseContextEtc } from '../context'
import { dogImg } from '../utils/dogAvatars/dogPhotos'

import Dog from '../utils/dog.JPG'
function Chat() {
  const { userChat, setUserChat, userText, scroll } = UseContextEtc()

  const [dogPhoto, setDogPhoto] = useState()

  useEffect(() => {
    let index = Math.floor(Math.random() * dogImg.length - 1)
    setDogPhoto(dogImg[index])
    console.log(dogPhoto)
  }, [])
  return (
    <section className="h-[100vh] w-[100vw]  overflow-y-scroll    sticky top-0  scroll ">
      {userChat?.map((val, index) => {
        return (
          <div key={index} className="flex flex-col    ">
            <div className="flex items-center   gap-5  min-h-[4rem]  max-h-[2000px]   w-[100vw]  ">
              <img
                src={dogPhoto.Dogimg}
                className="w-[30px] h-[30px] rounded-[8px] ml-[6rem]"
              />
              <p className="text-white ">{val.text}</p>
            </div>
            <div className="flex items-center bg-[#444654] gap-5  min-h-[4rem]  max-h-[2000px]   w-[100vw]  ">
              <img
                src={Dog}
                className="w-[30px] h-[30px] rounded-[8px]   ml-[6rem]"
              />
              <p className="text-white  ">{val.bot}</p>
              <span ref={scroll}></span>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Chat
