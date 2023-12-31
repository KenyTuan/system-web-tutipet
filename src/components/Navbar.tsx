import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
        <Link href={'/'} className='ml-3 mr-3'>
            <span className='text-white font-semibold font-sans text-xl hover:text-yellow-300'>Home</span>
        </Link>
        <Link href={'#'} className='ml-3 mr-3'>
            <span className='text-white font-semibold font-sans text-xl hover:text-yellow-300'>Care service</span>
        </Link>
        <Link href={'#'} className='ml-3 mr-3'>
            <span className='text-white font-semibold font-sans text-xl hover:text-yellow-300'>Shopping</span>
        </Link>
        <Link href={'#'} className='ml-3 mr-3'>
            <span className='text-white font-semibold font-sans text-xl hover:text-yellow-300'>Blog</span>
        </Link>
        <Link href={'/about'} className='ml-3 mr-3'>
            <span className='text-white font-semibold font-sans text-xl hover:text-yellow-300'>About us</span>
        </Link>
    </>
  )
}
