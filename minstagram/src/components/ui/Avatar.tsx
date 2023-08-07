/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

type Props = {
  image?:string | null;
  size?:string | undefined;
  needBg?:string | undefined;
}

export default function Avatar(props:Props) {
  
  let { needBg, size, image } = props;

  needBg === 'yes' ? `` : '';
  size === 'big' ? size = `w-18 h-18` : size = 'w-9 h-9';

  return (
    <div className={`${size} rounded-full bg-gradient-to-bl from-white`}>
      <img className='rounded-full p-[0.1rem]' alt='user profile' src={image ?? undefined} referrerPolicy='no-referrer'/>
    </div>
  )
}
