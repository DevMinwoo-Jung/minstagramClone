'use client';
import React from 'react'
import Avatar from './ui/Avatar'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import CopyRight from './ui/CopyRight';
import Tags from './ui/Tags';

const tagObj = {
  About: 'About',
  Help: 'Help',
  Press: 'Press',
  API: 'API',
  Jobs: 'Jobs',
  Privacy: 'Privacy',
  Teams: 'Teams',
  Location: 'Location',
  Language: 'Language' 
}

export default function SideBar() {
  const { data: session } = useSession()
  const user = session?.user;
  console.log(user)

  return (
    <section>
      <div className='w-full h-full block'>
        <div className='mr-4'>
          {
            user && 
            <div className='flex'>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} size='big' needBg='no'/>
              </Link>
              <div className='block ml-6'>
                <p className='font-extrabold'>{user.email}</p>
                <p className='text-gray-500'>{user.name}</p>
              </div>
            </div>
          }
        </div>
        <div className='mt-8 text-gray-500 gap-4 grid-cols-4'>
          <Tags tagObj={tagObj}/>
        </div>
        <div className='text-gray-500 mt-8'>
          <CopyRight/>
        </div>
      </div>
    </section>
  )
}
