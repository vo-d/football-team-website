import React from 'react'
import { UserIcon, GlobeAltIcon, } from '@heroicons/react/24/outline'

function Header() {
  return (
    <div className=' 2xl:ml-96 2xl:mr-96'>
        <a href=""><img src="/mancity.png" alt="" className='w-36 h-36 mx-auto p-2'/></a>
        <nav className='flex justify-around p-3 mt-5 bg-blue-400 text-white font-bold font-[Helvetica] sc'>
            <a>About</a>
            <a>Team</a>
            <a>Schedule & Standing</a>
            <a>Contact</a>
        </nav>
    </div>
  )
}

export default Header