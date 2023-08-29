import { FullPost } from '@/types/model/post'
import React from 'react'
import Avatar from './ui/Avatar'
import Smile from './ui/icons/Smile'
import EmptyHeart from './ui/icons/EmptyHeart copy'
import BookMarks from './ui/icons/BookMarks'

type Props = {
  post: FullPost
}

export default function Post(props:Props) {
  
  const { text, id, userImage, username, image, createdAt,likes, comments } = props.post

  return (
    <section className='m-auto w-2/3 mt-6 block rounded-md border-2'>
      <div className='w-full flex ml-3 items-center mt-4'>
        <Avatar image={userImage}/>
        <span className='ml-6'>{username}</span>
      </div>
      <div className='h-96'>
        <image/>
      </div>
      <div className='w-full mt-3'>
        <div className='flex justify-between'>
          <span className='ml-6'><EmptyHeart/></span>
          <span className='mr-6'><BookMarks/></span>
        </div>
        <div className='block mt-3'>
          <p className='ml-6'>1 Likes</p>
          <p className='ml-6 mt-2 mb-2'>{createdAt} ago</p>
          <div className='ml-6 mt-3'>
            <span className='font-extrabold mr-4'>{username}</span>
            <span>{text}</span>
          </div>
        </div>
      </div>
      <div className='bg-white flex mt-3 mb-4'>
        <span className='ml-4 mr-4'><Smile/></span>
        <input className='w-full' type="text" placeholder='Add a comment' />
        <span className='ring-offset-blue mr-4'>Post</span>
      </div>
    </section>
  )
}
