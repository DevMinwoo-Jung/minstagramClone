'use client'
import { SimplePost } from '@/types/model/post';
import React from 'react'
import useSWR from 'swr';

export default function PostList() {

  const {data: posts, isLoading: loading} = useSWR<SimplePost[]>('/api/posts');

  return (
    <ul>
      {posts && posts.map((post:SimplePost)=> <li key={post.id}>{post.text}</li>)}
    </ul>
  )
}
