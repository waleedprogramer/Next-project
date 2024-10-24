import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <h1>GYMFITO</h1>
        <ul>
          <Link href='./'><li>Home</li></Link>
          <Link href='./about'><li>About</li></Link>
          <Link href='./subscriptions'><li>Subscriptions</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
