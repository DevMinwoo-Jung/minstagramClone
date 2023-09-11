'use client'
import { SimplePost } from '@/types/model/post';
import Image from 'next/image';
import React from 'react'

type Props = {
  post: Partial<SimplePost>;
  priority?: boolean;
}

export default function PostImage({post, priority = false}:Props) {
  
  const { username, image } = post;

  return (
    <Image priority={priority} 
    className='w-full object-cover aspect-square' 
    src={image!} 
    alt={`photo by ${username}`} width={500} height={500}/>
  )
}
