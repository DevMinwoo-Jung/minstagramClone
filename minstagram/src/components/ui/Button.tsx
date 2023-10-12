import React from 'react'

type Props = {
  text: string;
  onClick: () => void;
  red?: boolean;
}

export default function Button({text, onClick, red}:Props) {
  return (
    <div className={`border-none rounded-md py-2 px-8 text-white leading-4 ${red? 'bg-red-500': 'bg-blue-300'}`}>{text}</div>
  )
}
