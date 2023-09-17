'use client'
import { SimplePost } from '@/types/model/post';
import React from 'react'
import useSWR from 'swr';

import GridSpinner from './ui/GridSpinner';
import PostListCard from './PostListCard';

export default function PostList() {

  const {data: posts, isLoading: loading} = useSWR<SimplePost[]>('/api/posts');

  return (
    <section>
      {
        loading && (
          <div>
            <GridSpinner color='red'/>
          </div>
        )
      }
      {
        posts && (
        <ul>
          {posts.map((post:SimplePost, index)=> <li key={post.id}><PostListCard post={post} priority={index < 2 ? true : false}/></li>)}
        </ul>
        )
      }
    </section>
  )
}
