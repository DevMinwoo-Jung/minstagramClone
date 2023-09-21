'use client'
import React from 'react'
import CommentForm from './CommentForm'
import ActionBar from './ActionBar'
import Avatar from './ui/Avatar'
import Image from 'next/image'
import { FullPost, SimplePost } from '@/types/model/post'
import useSWR from 'swr'

type Props = {
  post: SimplePost;
  onClose?: () => void;
}

export default function PostDetail({post, onClose}:Props) {
  
  const { id, userImage, username, createdAt, likes, text, image } = post;

  const { data } = useSWR<FullPost>(`/api/posts/${id}`)

  const comments = data?.comments;

  return (
          <section>
              <div className='relative'>
                <Image 
                priority
                src={image!} 
                alt={`photo by ${username}`} fill sizes='650px'/>
              </div>
          </section>
  )
}
