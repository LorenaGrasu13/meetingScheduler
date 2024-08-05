"use client"
import { Button } from '@/components/ui/button'
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
        <div className='hidden lg:block'>
            <Image src='/profile1.jpg' width={100} height={100}
            className='h-[100px] object-cover rounded-full absolute right-36'></Image>
            <Image src='/profile3.jpg' width={100} height={100}
            className='h-[100px] object-cover rounded-full absolute top-48 left-16'></Image>
            <Image src='/profile2.jpg' width={100} height={100}
            className='h-[100px] object-cover rounded-full absolute bottom-20 left-36'></Image>
            <Image src='/profile2.jpg' width={100} height={100}
            className='h-[100px] object-cover rounded-full absolute right-16 bottom-32'></Image>
        </div>
        <div className='text-center max-w-3xl'>
        <h2 className='font-bold text-[60px] text-slate-700'>Easy scheduling ahead</h2>
        <h2 className='text-xl mt-5 text-slate-500'>Scheduly is your scheduling automation platform for eliminating the back-and-forth emails to find the perfect time - and so much more.</h2>
        <div className='flex gap-4 flex-col mt-5'>
            <h3 className='text-sm'>Sign up free with Google and Facebook</h3>
            <div className='flex justify-center gap-8'>
                <RegisterLink><Button className="p-7 flex gap-4" >
                    <Image src='/google.png' alt='google'
                    width={30} height={30}></Image>
                    Sign up with Google</Button></RegisterLink>
                <RegisterLink><Button className="p-7 flex gap-4">
                    <Image src='/facebook.png' alt='facebook'
                    width={30} height={30}></Image>
                    Sign up with Facebook</Button></RegisterLink>
            </div>
            <hr></hr>
            <h2><RegisterLink className='text-primary'>Sign up free with Email.</RegisterLink> No credit card required</h2>
        </div>
        </div>
    </div>
  )
}

export default Hero