import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const links = [
    {
        title: 'Trang Chủ',
        href: '/',
    },
    {
        title: 'Dịch Vụ',
        href: '/service',
    },
    {
        title: 'Sản Phẩm',
        href: '/products',
    },
    {
        title: 'Blog',
        href: '/about',
    },
];

export default function Navbar() {
    const pathname = usePathname();
    
    return (
        <>
            {
                links.map((link) =>{
                    return (
                        <Link 
                            key={link.title}
                            href={link.href} 
                            className={clsx('text-white font-light text-base bg-beige-500 button-nav',
                                {
                                    'bg-beige-700': pathname === link.href,
                                },)}>
                            {link.title}
                        </Link>
                    )
                }

                )
            }

        </>
    );
}
