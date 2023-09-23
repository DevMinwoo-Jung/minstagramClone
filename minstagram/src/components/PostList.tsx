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
      {loading && (
        <div className='text-center mt-32'>
          <GridSpinner color='red' />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className='mb-4'>
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
