'use client'
import React, { useState } from 'react'
import SearchIcon from './ui/icons/SearchIcon'

type Props = {
  setParam: (param: string) => void 
}

export default function SearchBar(props: Props) {

  const [inputParam, setInputParam] = useState('');

  const { setParam } = props;

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setParam(inputParam); // Update the param state with the input value
  };

  return (
    <form onSubmit={handleFormSubmit} className='w-full flex items-center px-3 border-t border-neutral-300 border-2 mt-4 mb-4 '>
      <SearchIcon />
      <input
        className='w-full ml-2 border-none outline-none p-3'
        type='text'
        placeholder='Search for a username or name'
        value={inputParam}
        onChange={(e) => setInputParam(e.currentTarget.value)}
      />
    </form>
  )
}
