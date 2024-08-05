"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='flex items-center justify-between 
        p-5 shadow-sm
        '>
            <Image src='/logo.svg' width={100} height={100} alt='logo'
                className='w-[100px] md:w-[120px]'
            />  
            <ul className='hidden md:flex gap-14 font-medium text-lg'>
                <li className='hover:text-primary transition-all duration-300 cursor-pointer'><Link href="/product">Product</Link></li>
                <li className='hover:text-primary transition-all duration-300 cursor-pointer'><Link href="/pricing">Pricing</Link></li>
                <li className='hover:text-primary transition-all duration-300 cursor-pointer'><Link href="/contact">Contact Us</Link></li>
                <li className='hover:text-primary transition-all duration-300 cursor-pointer'><Link href="/about">About Us</Link></li>
            </ul>
            <div className='flex gap-5'>
                <LoginLink><Button variant="ghost">Login</Button></LoginLink>
                <RegisterLink><Button>Get Started</Button></RegisterLink>
            </div>
        </div>
    </div>
  )
}

export default Header