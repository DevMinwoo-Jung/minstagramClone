'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';

export default function HeaderMine() {

  const router = useRouter();
  const pathName = usePathname();

  const isLogin = false;

  return (
    <div className='flex w-full justify-between cursor-pointer sticky'>
      <div className='ml-2'>
        <span className='text-1xl font-extrabold' onClick={() => router.push('/')}>
          Minstagram
        </span>
      </div>
      <div className='w-60 mr-2 flex'>
        {
          pathName === '/' ? <AiFillHome className='ml-2 w-12 text-2xl mt-2'></AiFillHome> : <AiOutlineHome className='ml-2 w-12 text-2xl mt-2' onClick={() => router.push('/')}></AiOutlineHome>
        }
        {
          pathName === '/search' ? <BsPlusSquareFill className='ml-2 w-12 text-2xl mt-2'></BsPlusSquareFill> : <BsPlusSquare className='ml-2 w-12 text-2xl mt-2' onClick={() => router.push('/search')}></BsPlusSquare>
        }
        {
          pathName === '/newPost' ? <RiSearchFill className='ml-2 w-12 text-2xl mt-2'></RiSearchFill> : <RiSearchLine className='ml-2 w-12 text-2xl mt-2' onClick={() => router.push('/newPost')}></RiSearchLine>
        }
        {
          isLogin ? <button className='w-16 h-8'>Sign in</button> : <button className='w-16 h-8'>Sign up</button>
        }
      </div>
    </div>
  )
}
