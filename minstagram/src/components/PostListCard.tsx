import { SimplePost } from '@/types/model/post'
import React from 'react'
import Avatar from './ui/Avatar';
import ActionBar from './ActionBar';
import CommentForm from './CommentForm';
import PostImage from './PostImage';

type Props = {
  post: SimplePost;
  priority?: boolean;
}

export default function PostListCard({post, priority = false}:Props) {

  const { userImage, username, image, createdAt, likes, text } = post;

  return (
    <article className='rounded-lg shadow-md border border-gray-200'>
      <div className='flex items-center p-2'>
        <Avatar image={userImage} highlight/>
        <span className='text-gray-900 font-bold ml-2'>{username}</span>
      </div>
      {/* <Image priority={priority} className='w-full object-cover aspect-square' src={image} alt={`photo by ${username}`} width={500} height={500}/> */}
      <PostImage priority={priority} post={post}/>
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
    </article>
  )
}
