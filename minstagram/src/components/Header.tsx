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

  const pathName = usePathname();

  return (
    <div className='flex justify-between items-center px-6'>
      <Link href={'/'}>
        <h1 className='text-3xl font-bold'>Minstagram</h1>
      </Link>
      <nav>
        <ul className='flex gap-4 items-center p-4'>
          {
            menu.map((icon) => {
              return (
                <Link key={Math.random()} href={icon.href}>
                  {
                    pathName === icon.href ? icon.clcikedIcon : icon.icon
                  }
                </Link>
              )        
            })
          }
          <ColorButton text='Sign in' onClick={() => {}} />
        </ul>
      </nav>
    </div>
  )
}

export default Header