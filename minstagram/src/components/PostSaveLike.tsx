import React from 'react'
import PostsIcon from './ui/icons/PostsIcon';
import SavedIcon from './ui/icons/Save';
import Liked from './ui/icons/Liked';

export default function PostSaveLike() {
  
  const icons = [<PostsIcon key={'POST'}/>, <SavedIcon key={'SAVE'}/>, <Liked key={'LIKED'}/>]; 
  const tags = [ 'POST', 'SAVE', 'LIKED'];
  
  return (
    <div className='flex m-auto justify-center'>
      {
        icons.map((icon, index) => { 
          return (
            <div className='mr-12 flex' key={tags[index]}>
              <span className='w-10'>{icon}</span>
              <span>{tags[index]}</span>
            </div>
          )
        })
      }
    </div>
  )
}
