'use client'
import { SimplePost } from '@/types/model/post';
import React from 'react'
import { GridLoader } from 'react-spinners';
import useSWR from 'swr';
import PostListCard from './PostListCard';

export default function PostList() {

  const {data: posts, isLoading: loading} = useSWR<SimplePost[]>('/api/posts');

  return (
    <section>
      {
        loading && (
          <div>
            <GridLoader color='red'/>
          </div>
        )
      }
      {
        posts && (
        <ul>
          {posts.map((post:SimplePost)=> <li key={post.id}><PostListCard post={post}/></li>)}
        </ul>
        )
      }
    </section>
  )
}
