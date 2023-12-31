import React from 'react'
import Avatar from './ui/Avatar'
import Link from 'next/link';

type Props = {
  username: string;
  image: string;
  name: string;
  followers: any;
  following: any;
}

export default function UserCard(user:Props) {

  const { username, image, name, followers, following } = user;

  return (
    <Link href={username}>
      <div className='flex rounded-lg border-2 mt-2 mb-2 p-2 cursor-pointer'>
        <Avatar image={image}/>
        <div className='ml-4'>
            <p className='font-bold text-xl'>{username}</p>
            <p className='mt-2 mb-2'>{name}</p>
            <span className='text-gray-300 mr-2'>{(followers === null) ? 0 : followers} followers</span>
            <span className='text-gray-300'>{(following === null) ? 0 : following} following</span>
        </div>
      </div>
    </Link>
  )
}
