import { faBell, faHome, faMessage, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import LogOutButton from './LogOutButton'
import ProfilePageLink from './ProfilePageLink'


interface props
{
    userId:string
}

function TopOfPageLinks({userId}:props) {
  return (

    <div className='w-2/5 pl-48 h-full flex items-center justify-around'>
                <Link href={"/Main"}><FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faHome} /></Link>
                <Link href={`/Messeages/${userId}`}><FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faMessage} /></Link>
                <Link href={`/Videos/${userId}`}><FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faVideo} /></Link>
                <ProfilePageLink/>
                <FontAwesomeIcon className='w-9 h-12 text-blue-100 hvr-shrink cursor-pointer'  icon={faBell} />
                <LogOutButton/>
    </div>

  )
}

export default TopOfPageLinks