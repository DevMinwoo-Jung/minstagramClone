'use client'
import { DetailUser, ProfileUser } from '@/types/model/user';
import React, { FormEvent, useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';

const SearchPage = () => {

  const [param, setParam] = useState('');

  const {data: users, isLoading: loading, error} = useSWR<ProfileUser[]>(`/api/search/${param}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  }
  // onSubmit에서 추가 처리가 없는 이유는 useSWR이 keyword가 변경이 될 때마다 SWR이 알아서 네트워크 요청 한다
  return (
    <form onSubmit={onSubmit} className=''>
      <input type="text" autoFocus placeholder='Search for a username or id' value={param} onChange={(e)=> setParam(e.target.value)}/>
      {error && <p>something is wrong</p>}
      {loading  && ( <PropagateLoader size={8} color='red'/> )}
      {!loading  && !error && users?.length === 0}
      <ul>
        {users && users.map((user)=> {
          return (
            <li key={user.name}>{user.username}</li>
          )
        })}
      </ul>
    </form>

  )
}

export default SearchPage