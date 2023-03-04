import { User } from '@prisma/client'
import React from 'react'

interface props{
    tweetUser:User
}

function TweetPageUserProfile({tweetUser}:props) {
  return (
    <div className='w-full h-24 border-b-2 px-6 border-white flex items-center justify-between'>
       {tweetUser.img && <img src={tweetUser.img} className='hover:scale-105 cursor-pointer duration-300 w-20 h-20 rounded-full'></img>}
        
        <div className=' w-48 h-full flex items-center justify-around flex-col'>
                <p className='text-sm font-bold text-white'>{tweetUser.userName}</p>  
                <p className='text-sm font-bold text-white'>From {tweetUser.placeToLive}</p>  
        </div>

</div>
  )
}

export default TweetPageUserProfile