import React from 'react'
import { UserIcon, GlobeAltIcon, } from '@heroicons/react/24/outline'

function Header() {
  return (
    <div>
        <a href=""><img src="/mancity.png" alt="" className='w-28 h-28 mx-auto mt-5'/></a>
        <nav className='flex justify-around p-3 mt-5 bg-blue-400 text-white font-bold'>
            <a>About</a>
            <a>Team</a>
            <a>Schedule & Standing</a>
            <a>Contact</a>
        </nav>
    </div>
  )
}

export default Header