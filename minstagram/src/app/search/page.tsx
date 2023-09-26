'use client'
import SearchBar from '@/components/SearchBar';
import UserCard from '@/components/UserCard';
import { DetailUser } from '@/types/model/user';
import React from 'react'
import useSWR from 'swr';

const SearchPage = () => {

    const {data: users, isLoading: loading} = useSWR<DetailUser>('/api/search');

    console.log(users)

  return (
    <section className='w-3/4 m-auto justify-center items-center'>
      <div className='m-auto'>
        <SearchBar/>
      </div>
      <div className='m-auto'>
        <UserCard/>
      </div>
    </section>
  )
}

export default SearchPage