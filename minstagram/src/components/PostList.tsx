'use client';
import { FullPost } from '@/types/model/post';
import React from 'react'
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Post from './Post';

const fetcher = async (url:string) => {
  const res = await fetch(url);
  return res.json();
};

export default function PostList() {

  const { data, isLoading, error } = useSWR<FullPost>('/api/posts', fetcher);

  const post = data;

  console.log(post)

  return (
    <section>
      {/* {
        isLoading ? ( <PropagateLoader size={8} color='red'/> ):
        ((!post) && <p>${`you don"t have following`}</p>
      )} */}
      {
        data && 
        (
          <div>
            <Post/>
          </div>
        )
      }
    </section>
  )
}
