import { FullPost } from '@/types/model/post'
import React from 'react'

type Props = {
  post: FullPost
}

export default function Post(props:Props) {
  
  const { text } = props.post

  return (
    <div>
      {
        text
      }
    </div>
  )
}
