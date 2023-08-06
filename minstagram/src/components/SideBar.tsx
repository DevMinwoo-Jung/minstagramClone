'use client';
import React from 'react'
import Avatar from './ui/Avatar'
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function SideBar() {
  const { data: session } = useSession()
  const pathName = usePathname();
  const user = session?.user;

  return (
    <section>
      <div className='w-1/3 h-full bg-black'>
        {
          user && 
          <Link href={`/user/${user.username}`}>
            <Avatar image={user.image}/>
          </Link>
        }
      </div>
    </section>
  )
}
