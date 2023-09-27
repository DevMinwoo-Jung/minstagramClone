import React from 'react'
import Avatar from './ui/Avatar'

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
    <div className='flex'>
      <Avatar image={image}/>
      <div className='ml-4'>
          <p>{username}</p>
          <p>{name}</p>
          <span>{followers}followers</span>
          <span>{following}following</span>
      </div>
    </div>
  )
}
