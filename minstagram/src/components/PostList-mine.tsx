'use client';
import { FullPost, SimplePost } from '@/types/model/post';
import React from 'react'
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Post from './Post';

const fetcher = async (url:string) => {
  const res = await fetch(url);
  return res.json();
};

export default function PostListMine() {

  const { data, isLoading, error } = useSWR<FullPost[]>('/api/posts', fetcher);

  const posts = data;

  console.log(posts)

  return (
    <section>
      {
        isLoading ? ( 
          <div className='text-center m-auto'>
            <PropagateLoader size={8} color='red'/> 
          </div>
        ):
        ((!posts) && <p className='text-center'>${`you don"t have following`}</p>
      )}
      {
        posts &&
        <>
          {
            posts.map((post)=> {
              return (
                <Post key={post.id} post={post}/>
              )
            })
          }
        </>
      }
    </section>
  )
}
