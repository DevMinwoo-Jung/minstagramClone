/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

type Props = {
  image?:string | null
}

export default function Avatar({image}: Props) {
  

  return (
    <div className='w-9 h-9 rounded-full bg-gradient-to-bl from-white'>
      <img className='rounded-full p-[0.1rem]' alt='user profile' src={image ?? undefined} referrerPolicy='no-referrer'/>
    </div>
  )
}
