import Link from 'next/link'
import React from 'react'

type Props = {
  tagObj: Record<string, string>
}

export default function Tags({tagObj}:Props) {
  return (
    <>
      {
        Object.values(tagObj).map((element, index) => {
          const encodedElement = encodeURIComponent(element);
          const href = `tags/${encodedElement}`
          const value = index !== 0 ? ` . ${element}` : element;
          
          return (
            <Link
              className='pr-4' 
              key={element} 
              href={href}>
              {value}
            </Link>
          )
        })
      }
    </>
  )
}
