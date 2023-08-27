import { FullPost } from '@/types/model/post'
import React from 'react'
import Avatar from './ui/Avatar'

type Props = {
  post: FullPost
}

export default function Post(props:Props) {
  
  const { text, id, userImage, username, image, createdAt,likes, comments } = props.post

  return (
    <section className='w-min-full mt-6 block'>
      <div className='w-full flex ml-3 items-center'>
        <Avatar image={userImage}/>
        <span className='ml-6'>{username}</span>
      </div>
      <div className='h-96'>
        asd
      </div>
      <div className='w-full'>
        <div className='justify-end'>
          <span>Likes</span>
          <span>Heart</span>
        </div>
        <div className='block'>
          <p className='ml-6'>0 Like</p>
          <div>
            <span className='font-extrabold'>{username}</span>
            <span>{text}</span>
          </div>
        </div>
      </div>
      <div className='bg-white flex'>
        <span>Smile</span>
        <input type="text" placeholder='Add a comment' />
        <span className='ring-offset-blue'>Post</span>
      </div>
    </section>
  )
}
