'use client'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import { Inter } from 'next/font/google';
import logo from '../../public/logo1.svg';


function Header() {
  return (
    <header className='w-screen border-b-2 shadow-md px-3 pt-5 pb-5 mb-5 overflow-hidden sm:px-12'>
        <div className='w-full pb-3 grid grid-cols-3 justify-items-center sm:grid-cols-3'>
          <div className='ml-0 flex items-center w-full sm:ml-4'>
            <Link href='/'>
                <span className='font-medium text-base- sm:text-4xl' >TuTi's Pet</span>
            </Link>
          </div>

        <Image className='' src={logo} alt={'Logo Shop'} />
        </div>
        <div className='w-full flex flex-row justify-center '>
          <Navbar />
        </div>
        <div>
          
        </div>
    </header>
  )
}

export default Header