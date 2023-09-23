'use client';
import Link from 'next/link'
import React from 'react'
import HomeIcon from './ui/icons/HomeIcon'
import HomeFilledIcon from './ui/icons/HomeFilledIcon'
import SearchIcon from './ui/icons/SearchIcon'
import SearchFillIedIcon from './ui/icons/SearchFillIedIcon'
import NewPostIcon from './ui/icons/NewPostIcon'
import NewPostIconFill from './ui/icons/NewPostIconFill'
import { usePathname } from 'next/navigation';
import ColorButton from './ui/ColorButton';

import { useSession, signIn, signOut } from "next-auth/react"
import Avatar from './ui/Avatar';

const menu = [
  {
    href: '/', icon: <HomeIcon/>, clcikedIcon: <HomeFilledIcon/>
  },
  {
    href: '/search', icon: <SearchIcon/>, clcikedIcon: <SearchFillIedIcon/>
  },
  {
    href: '/newPost', icon: <NewPostIcon/>, clcikedIcon: <NewPostIconFill/>
  }
]

const Header = () => {
  const { data: session } = useSession()
  const pathName = usePathname();
  const user = session?.user;

  return (
    <div className='flex justify-between items-center px-6'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>Instantgram</h1>
      </Link>
      <nav>
        <ul className='flex gap-4 items-center p-4'>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clcikedIcon : item.icon}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} size='small' highlight />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text='Sign out' onClick={() => signOut()} />
            ) : (
              <ColorButton text='Sign in' onClick={() => signIn()} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header