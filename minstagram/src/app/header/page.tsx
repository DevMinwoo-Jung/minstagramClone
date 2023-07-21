'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function Header() {

  const router = useRouter();

  return (
    <div className='flex w-full justify-between cursor-pointer fixed'>
      <div className='ml-2'>
        <span className='text-1xl font-extrabold' onClick={() => router.push('/')}>
          Recolog
        </span>
      </div>
      <div className='mr-2'>
        <span className='ml-2' onClick={() => router.push('/')}>Home</span>
        <span className='ml-2' onClick={() => router.push('/about')}>Profile</span>
        <span className='ml-2' onClick={() => router.push('/contact')}>Contact</span>
      </div>
    </div>
  )
}
