'use client'
import { SimplePost } from '@/types/model/post'
import React, { useState } from 'react'
import Avatar from './ui/Avatar';
import ActionBar from './ActionBar';
import CommentForm from './CommentForm';
import ModalPortal from './ModalPortal';
import Image from 'next/image';

type Props = {
  post: SimplePost;
  priority?: boolean;
}

export default function PostListCard({post, priority = false}:Props) {

  const { userImage, username, createdAt, likes, text, image } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <article className='rounded-lg shadow-md border border-gray-200'>
      <div className='flex items-center p-2'>
        <Avatar image={userImage} highlight/>
        <span className='text-gray-900 font-bold ml-2'>{username}</span>
      </div>
        <Image priority={priority} 
        onClick={() => setOpenModal(true)}
        className='w-full object-cover aspect-square cursor-pointer' 
        src={image!} 
        alt={`photo by ${username}`} width={500} height={500}/>
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
      {
        openModal && (
          <ModalPortal>
            <div>
              포스트 상세 페이지
            </div>
          </ModalPortal>
        )
      }
    </article>
  )
}
