import React from 'react'
import SearchIcon from './ui/icons/SearchIcon'

export default function SearchBar() {
  return (
    <form className='w-full flex items-center px-3 border-t border-neutral-300 border-2 mt-4 mb-4 '>
      <SearchIcon />
      <input
        className='w-full ml-2 border-none outline-none p-3'
        type='text'
        placeholder='Search for a username or name'
      />
    </form>
  )
}
