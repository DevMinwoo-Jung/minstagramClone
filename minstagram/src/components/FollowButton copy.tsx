'use client'
import React from 'react'
import { DetailUser } from '@/types/model/user';
import useSWR from 'swr';

type Props = {
  username: string;
}

const fetcher = async (url:string) => {
  const res = await fetch(url);
  return res.json();
};

export default function FollowButton(props:Props) {

  const { username } = props;

  const { data, isLoading, error } = useSWR<DetailUser>('/api/me', fetcher);

  const result = data?.following.some((user) => user.username === username)

  
  return (
    <>
      {
        result ? <button className='ml-6 w-28 bg-red-500 text-white p-1 pl-2 pr-2 rounded-lg'>Unfollow</button>
        : <button className='ml-6  w-28 bg-blue-500 text-white p-1 pl-2 pr-2 rounded-lg'>Follow</button>
      }  
    </>
  )
}
