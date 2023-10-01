'use client'
import SearchBar from '@/components/SearchBar';
import UserCard from '@/components/UserCard';
import { DetailUser } from '@/types/model/user';
import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';

const SearchPage = () => {

  const [param, setParam] = useState('');

  const {data: users, isLoading: loading} = useSWR<DetailUser[]>(`/api/search/${param}`);

  useEffect(()=> {
    setParam(param)
  },[param])

  return (
    <section className='w-3/4 m-auto justify-center items-center'>
      <div className='m-auto'>
        <SearchBar setParam={setParam}/>
      </div>
      <div className='m-auto'>
        {
          loading  && ( <PropagateLoader size={8} color='red'/> )
        }
        {
          !loading && 
          users!.map((user)=> {
            const { username, image, name, followers, following } = user;
            return  <UserCard key={image} username={username} image={image!} name={name} followers={followers} following={following}/>  
          })
        }
      </div>
    </section>
  )
}

export default SearchPage