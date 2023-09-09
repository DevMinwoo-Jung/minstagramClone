import dynamic from 'next/dynamic';
import React from 'react'

const GridLoader = dynamic(
  ()=> import('react-spinners').then(lib => lib.GridLoader),
  {
    ssr: false
  }
)
// 이렇게하면 필요한 시점에 load가능!!

type Props = {
  color?: string;
}

export default function GridSpinner({color = 'red'} : Props) {
  return (
    <GridLoader color={color} />
  )
}
