'use client';
import React from 'react'
import useSWR from 'swr';

const fetcher = async (url:string) => {
  const res = await fetch(url);
  return res.json();
};


export default function Follower() {
  const { data, isLoading, error } = useSWR('/api/user', fetcher);

  return (
    <div className='w-full h-32'>
      asd
    </div>
  )
}
