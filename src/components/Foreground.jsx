// import React from 'react'
import { useRef } from "react"
import Card from "./Card"


const Foreground = () => {

  const ref = useRef(null);

  const data =[
    {
      desc:`“Good friends, good books, and a sleepy conscience: this is the ideal life.”`,
      filesize:"4mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle:"Upload Now",
        tagColor:"blue"
      },
    },
    {
      desc:`“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”`,
      filesize:"2mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle:"Download Now",
        tagColor:"green"
      },
    },
    {
      desc:`“You only live once, but if you do it right, once is enough.”`,
      filesize:"13mb",
      close: true,
      tag: {
        isOpen:false,
        tagTitle:"Download Now",
        tagColor:"green"
      },
    },
    {
      desc:`“Today you are You, that is truer than true. There is no one alive who is Youer than You.”`,
      filesize:"17mb",
      close: false,
      tag: {
        isOpen:true,
        tagTitle:"Upload Now",
        tagColor:"blue"
      },
    },
    {
      desc:`“Life would be tragic if it we are not funny.”`,
      filesize:"33mb",
      close: false,
      tag: {
        isOpen:false,
        tagTitle:"Download Now",
        tagColor:"green"
      },
    },
    {
      desc:`“Life is like riding a bicycle. To keep your balance, you must keep moving.”`,
      filesize:"0.9mb",
      close: true,
      tag: {
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"green"
      },
    },
  ]

  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
      ))}
      </div>
    </>
  )
}

export default Foreground