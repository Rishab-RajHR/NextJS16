'use client';

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  let router = useRouter();
  return (
    <>
     <h2>Contact Page</h2>
     {/* <Link href='/home'>Home Page</Link> */}
     <Link href='/contact/employee'>Contact Employee</Link>
     <br />
     <br />
     <button onClick={() => router.push('/contact/company')}>Contact Company</button>
    </>
  )
}

export default page