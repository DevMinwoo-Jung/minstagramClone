'use client'
import React from 'react'
import { DetailUser, ProfileUser } from '@/types/model/user';
import useSWR from 'swr';
import Button from './ui/Button';

type Props = {
  user: ProfileUser;
}

const fetcher = async (url:string) => {
  const res = await fetch(url);
  return res.json();
};

export default function FollowButton({user}: Props) {

  const { username } = user;
  const { data: loggedInUser } = useSWR<DetailUser>('/api/me', fetcher);

  const showButton = loggedInUser && loggedInUser.username !== username
  const following = loggedInUser && loggedInUser.following.find(item => item.username === username);  
  
  const text = following? 'Unfollow' : 'Follow';

  return (
    <>
      {showButton && <Button text={text} onClick={()=>{}} red={text === 'Unfollow'}></Button>}
    </>
  )
}
