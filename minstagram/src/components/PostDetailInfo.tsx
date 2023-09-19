'use client'
import React from 'react'
import { SimplePost } from '@/types/model/post'
import userSWR from 'swr';
import PostDetail from './PostDetail-mine';

type Props = {
  post: SimplePost;
  priority?: boolean;
  onClose: () => void;
}

export default function PostDetailInfo({post, onClose}:Props) {
  
  const { id } = post;
  const { data } = userSWR<SimplePost>(`/api/postDetail/${id}`);

  return (
    <>
      {
        data && (
          <PostDetail post={data} onClose={onClose} />
        ) 
      }
    </>
  )
}
