import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

function Header() {
  return (
    <header className='w-full h-24 bg-yellow-700 flex mb-2 justify-between pr-32'>
        <Link href='/' 
            className='block translate-y-8  translate-x-8'>
          <Image 
            src="/logo.svg"
            alt='Logo Shop'
            width={100}
            height={100}
          />
        </Link>
        <div className='flex self-center'>
          <Navbar/>
        </div>
    </header>
  )
}

export default Header