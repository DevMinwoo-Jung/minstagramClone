import { SimplePost } from '@/types/model/post'
import React from 'react'
import Avatar from './ui/Avatar';
import Image from 'next/image';
import BookMarks from './ui/icons/BookMarks';
import EmptyHeart from './ui/icons/EmptyHeart copy';
import { parseDate } from '@/utils/date';
import Smile from './ui/icons/Smile';

type Props = {
  post: SimplePost;
}

export default function PostListCard({post}:Props) {

  const { userImage, username, image, createdAt, likes, text } = post;

  return (
    <>
      <div>
        <Avatar image={userImage} highlight/>
        <span>{username}</span>
      </div>
      <Image src={image} alt={`photo by ${username}`} width={500} height={500}/>
      <div>
        <EmptyHeart/>
        <BookMarks/>
      </div>
      <div>
        <p>{`${likes?.length ?? 0} ${likes?.length > 1 ? 'likes' : 'like'}`}</p>
        <p><span>{username}</span>{text}</p>
        <p>{parseDate(createdAt)}</p>
        <form action="">
          <Smile/>
          <input type="text" placeholder='Add a comment' />
          <button>Post</button>
        </form>
      </div>
    </>
  )
}
