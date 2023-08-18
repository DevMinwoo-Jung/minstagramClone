'use client';
import { DetailUser } from '@/types/model/user';
import React from 'react'
import useSWR from 'swr';
import PropagateLoader from "react-spinners/PropagateLoader"
import Link from 'next/link';
import Avatar from './ui/Avatar';

const fetcher = async (url:string) => {
  const res = await fetch(url);
  return res.json();
};


export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>('/api/me', fetcher);

  // const users = data?.following;
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];

  return (
    <section className='w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto'>
      {
        isLoading ? ( <PropagateLoader size={8} color='red'/> ):
        ((!users || users?.length === 0) && <p>${`you don"t have following`}</p>
      )}
      {
        users && users.length > 0 && 
        <ul className='flex w-full gap-2'>
          {
            users.map(({image, username})=> 
              <li key={username}>
                <Link 
                key={username}
                className='flex flex-col items-center w-20'
                href={`/user/${username}`}>
                  <Avatar image={image} highlight/>
                    <p className='w-full text-sm text-center text-ellipsis overflow-hidden'>{username}</p>  
                </Link>
              </li>
            )
          }
        </ul>
      }
    </section>
  )
}
