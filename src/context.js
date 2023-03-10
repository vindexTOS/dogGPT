import React, { useContext, createContext, useState, useEffect } from 'react'
import axios from 'axios'
const context = createContext()
export const ContextProvider = ({ children }) => {
  // brain js

  // useEffect(()=>{

  // },[bot])
  const scroll = React.useRef()
  const [userChat, setUserChat] = useState([])
  const [userText, setUserText] = useState('')

  const [bot, setBot] = useState(['Hi, Ask Me About Dog Facts'])
  const [ban, setBan] = useState(false)
  const options = {
    method: 'GET',
    url: 'https://dog-facts2.p.rapidapi.com/facts',
    headers: {
      'X-RapidAPI-Key': 'fcc91f692bmshf82452bbd2fb93fp163c69jsncb0b7b9c8641',
      'X-RapidAPI-Host': 'dog-facts2.p.rapidapi.com',
    },
  }
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setBot(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [userText])
  const messageSend = () => {
    const scrollDistance = 257
    if (userText !== '') {
      setUserChat([...userChat, { text: userText, bot: bot?.facts }])
      setUserText('')
      scroll.current.scrollIntoView({
        top: scrollDistance,
        behavior: 'smooth',
      })
    }
  }
  return (
    <context.Provider
      value={{
        userChat,
        setUserChat,
        userText,
        setUserText,
        messageSend,
        bot,
        scroll,
        ban,
      }}
    >
      {children}
    </context.Provider>
  )
}

export const UseContextEtc = () => {
  return useContext(context)
}
