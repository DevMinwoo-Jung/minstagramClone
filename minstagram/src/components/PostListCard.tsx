'use client'
import Avatar from './ui/Avatar';
import CommentForm from './CommentForm';
import { SimplePost } from '@/types/model/post';
import Image from 'next/image';
import { useState } from 'react';
import ActionBar from './ActionBar';
import PostModal from './PostModal';
import ModalPortal from './ModalPortal';
import PostDetail from './PostDetail';
import PostUserAvartar from './ui/PostUserAvartar';


type Props = {
  post: SimplePost;
  priority?: boolean;
}

export default function PostListCard({post, priority = false}:Props) {

  const { userImage, username, createdAt, likes, text, image } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <article className='rounded-lg shadow-md border border-gray-200'>
      <PostUserAvartar image={userImage} username={username}/>
      <Image
        className='w-full object-cover aspect-square'
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post}/>
          </PostModal>
        </ModalPortal>
      )}
    </article>
  )
}
