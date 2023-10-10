import { SimplePost } from '@/types/model/post';
import React from 'react'
import PostSaveLike from './PostSaveLike';

type Props = {
  post: SimplePost;
};

export default function UserPosts({ post }:Props) {
  return (
    <div className='border-t-2 border-zinc-300 max-w-3xl m-auto'>
      <PostSaveLike/>
    </div>
  )
}
