import { ProfileUser } from '@/types/model/user'
import Link from 'next/link';
import React from 'react'
import Avatar from './ui/Avatar';
type Props = {
  user: ProfileUser;
}

export default function UserCardc({user: {name, username, image, following, followers}}:Props) {
  return (
    <Link href={`user/${username}`} className='flex items-center w-full rounded-sm border border-neutral-300 mb-2 p-4 bg-white hover:bg-neutral-50'>
      <Avatar image={image}/>
      <div className='text-neutral-500 ml-4'>
        <p className='text-black font-bold leading-4'>{username}</p>
        <p>{name}</p>
        <p className='text-sm'>{`${followers} followers ${following} following`}</p>
      </div>
    </Link>
    // nextjs는 Link tag가 있다면 prefetch을 한다
  )
}
