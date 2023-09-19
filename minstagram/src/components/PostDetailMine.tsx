'use client'
import React from 'react'
import CommentForm from './CommentForm'
import ActionBar from './ActionBar'
import Avatar from './ui/Avatar'
import Image from 'next/image'
import { SimplePost } from '@/types/model/post'

type Props = {
  post: SimplePost;
  onClose: () => void;
}

export default function PostDetail({post, onClose}:Props) {
  
  const { userImage, username, createdAt, likes, text, image } = post;


  return (
          <article className='rounded-lg shadow-md border border-gray-200 flex'>
              <Image 
              onClick={() => onClose}
              className='w-full object-cover aspect-square cursor-pointer' 
              src={image!} 
              alt={`photo by ${username}`} width={500} height={500}/>
            <div>
              <div className='flex items-center p-2'>
                <Avatar image={userImage} highlight/>
                <span className='text-gray-900 font-bold ml-2'>{username}</span>
              </div>
              <ActionBar
                likes={likes}
                username={username}
                text={text}
                createdAt={createdAt}
              />
              <CommentForm />
              <button onClick={onClose}>Close</button>
            </div>
          </article>
  )
}
