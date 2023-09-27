'use client'
import SearchBar from '@/components/SearchBar';
import UserCard from '@/components/UserCard';
import { DetailUser } from '@/types/model/user';
import React from 'react'
import { CgSearchLoading } from 'react-icons/cg';
import useSWR from 'swr';

const SearchPage = () => {

  const {data: users, isLoading: loading} = useSWR<DetailUser[]>('/api/search');


  return (
    <section className='w-3/4 m-auto justify-center items-center'>
      <div className='m-auto'>
        <SearchBar/>
      </div>
      <div className='m-auto'>
        {
          loading  && <CgSearchLoading/>
        }
        {
          !loading && 
          users!.map((user)=> {

            const { username, image, name, followers, following } = user;

            return (
              <>
                <UserCard username={username} image={image!} name={name} followers={followers} following={following}/>  
              </>
            )
          })
        }
      </div>
    </section>
  )
}

export default SearchPage