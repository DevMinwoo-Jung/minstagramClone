'use client';
import { FullPost } from '@/types/model/post';
import React from 'react'
import useSWR from 'swr';

const fetcher = async (url:string) => {
  const res = await fetch(url);
  return res.json();
};

export default function PostList() {

  const { data, isLoading, error } = useSWR<FullPost>('/api/posts', fetcher);

  console.log(data)

  return (
    <div>PostList</div>
  )
}
