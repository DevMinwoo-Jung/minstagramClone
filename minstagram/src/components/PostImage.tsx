'use client'
import { SimplePost } from '@/types/model/post';
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import PostDetail from './PostDetail';

type Props = {
  post: SimplePost;
  priority?: boolean;
}

export default function PostImage({post, priority = false}:Props) {
  const [showModal, setShowModal] = useState(false);
  const { username, image, id } = post;
  
  console.log(id)

  return (
    <>
      <Image priority={priority} 
      onClick={() => setShowModal(true)}
      className='w-full object-cover aspect-square cursor-pointer' 
      src={image!} 
      alt={`photo by ${username}`} width={500} height={500}/>
      {showModal && createPortal(
        <PostDetail priority={priority} post={post} onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  )
}
