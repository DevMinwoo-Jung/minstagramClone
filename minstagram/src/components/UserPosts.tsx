'use client';
import { ProfileUser } from '@/types/model/user';
import { useState } from 'react';
import useSWR from 'swr';
import PostSaveLike from './PostSaveLike';

type Props = {
  user: ProfileUser;
};
export default function UserPosts({ user: { username } }: Props) {
  // /api/users/${username}/posts
  // /api/users/${username}/liked
  // /api/users/${username}/saved
  const [tab, setTab] = useState('saved');
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/users/${username}/${tab}`);
  console.log(posts);

  return (
    <div className='border-t-2 border-zinc-300 max-w-3xl m-auto'>
      <PostSaveLike/>
    </div>
  )
}
