'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const {data: session} = useSession()
  return (
    <header>
          <div className='flex justify-between'>
        <h2>
          <Link href="/">KickShare</Link>
        </h2>
        <ul>
          {
            session?.user
              ? (
                <div>
                    <div >
                      <button onClick={() => {signOut()}}>Logout</button>
                      <Link href='/upload'>Upload</Link>
                    </div>
                </div>
              )
              : (
                <>
                  <button onClick={() => {signIn()}}>Log in</button>
                  <Link href='/register'>Register</Link>
                </>
              )
          }
        </ul>
      </div>
    </header>
  )
}

export default Navbar