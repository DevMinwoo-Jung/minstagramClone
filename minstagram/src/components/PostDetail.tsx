import React from 'react'
import CommentForm from './CommentForm'
import ActionBar from './ActionBar'
import PostImage from './PostImage'
import Avatar from './ui/Avatar'
import { FullPost, SimplePost } from '@/types/model/post'
import userSWR from 'swr';

type Props = {
  post: SimplePost;
  priority?: boolean;
  onClose: () => void;
}

export default function PostDetail({post, priority = false, onClose}:Props) {
  
  const { data } = userSWR<FullPost>(`/api/postDetail/${post.id}`);
  const { userImage, username, createdAt, likes, text } = post;

  console.log(data)

  return (
    <article className='rounded-lg shadow-md border border-gray-200 flex'>
      <PostImage priority={priority} post={post}/>
      <div>
        <div className='flex items-center p-2'>
          <Avatar image={userImage} highlight/>
          <span className='text-gray-900 font-bold ml-2'>{username}</span>
        </div>
        <ActionBar
          likes={likes}
          username={username}
          text={text}
          createdAt={createdAt}
        />
        <CommentForm />
        <button onClick={onClose}>Close</button>
      </div>
    </article>
  )
}
