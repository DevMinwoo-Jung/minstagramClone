'use client'
import React from 'react'
import CommentForm from './CommentForm'
import ActionBar from './ActionBar'
import Avatar from './ui/Avatar'
import Image from 'next/image'
import { FullPost, SimplePost } from '@/types/model/post'
import useSWR from 'swr'
import PostUserAvartar from './ui/PostUserAvartar'

type Props = {
  post: SimplePost;
  onClose?: () => void;
}

export default function PostDetail({post}:Props) {
  
  const { id, userImage, username, image, createdAt, likes } = post;

  const { data } = useSWR<FullPost>(`/api/posts/${id}`)

  const comments = data?.comments;

  return (
    <section className='flex w-full h-full'>
      <div className='relative basis-3/5'>
        <Image
          className='object-cover relative'
          src={image}
          alt={`photo by ${username}`}
          width={800}
          height={800}
          priority
        />
      </div>
      <div className='w-full basis-2/5 flex flex-col'>
        <PostUserAvartar image={userImage} username={username} />
        <ul className='border-t border-gray-200 h-full overflow-y-auto p-4 mb-1'>
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li key={index} className='flex items-center mb-1'>
                  <Avatar
                    image={image}
                    size='small'
                    highlight={commentUsername === username}
                  />
                  <div className='ml-2'>
                    <span className='font-bold mr-1'>{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <ActionBar likes={likes} username={username} createdAt={createdAt} />
        <CommentForm />
      </div>
    </section>
  )
}
