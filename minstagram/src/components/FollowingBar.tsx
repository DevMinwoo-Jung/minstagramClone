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

  const users = data?.following;

  return (
    <section className='w-full h-32'>
      {
        isLoading ? ( <PropagateLoader size={8} color='red'/> ):
        ((!users || users?.length === 0) && <p>${`you don"t have following`}</p>
      )}
      {
        users && users.length > 0 && <ul>
          {
            users.map(({image, username})=> 
              <li key={username}>
                <Link href={`/user/${username}`}>
                  <Avatar image={image} highlight/>
                    <p>{username}</p>  
                </Link>
              </li>
            )
          }
        </ul>
      }
    </section>
  )
}
