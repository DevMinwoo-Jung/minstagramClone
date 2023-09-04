'use client'
import React from 'react'
import useSWR from 'swr';

export default function PostList() {

  const {data, isLoading: loading} = useSWR('/api/posts');

  return (
    <div>PostList</div>
  )
}
