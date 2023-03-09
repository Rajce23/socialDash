import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import ShowFollowersModalUnfollowBtn from './ShowFollowersModalUnfollowBtn'
import ShowFollowModalUnfollowBtn from './ShowFollowersModalUnfollowBtn'


interface FollowModalUser
{
    userId:string
    img:string
    friends:number
    follows:number
    followers:number
    posts:number
    tweets:number
    userName:string
}


interface props
{
    user:FollowModalUser
    userId:string
    followData:FollowModalUser[]
    setFollowData:React.Dispatch<React.SetStateAction<FollowModalUser[] | undefined>>
}

function ShowFollowersModalUser({setFollowData,followData,user,userId}:props) {
  const session = useSession()
  const router = useRouter()
  return (
    <div  className='w-72 h-96 postCommentShadow  m-2'>
      { user.img &&  <div className='w-full h-1/2' onClick={()=>{

        if(user.userId === session.data?.user?.name)
        {
          router.push(`/ProfilePage/${session.data?.user?.name}`)
        }
        else
        {
          router.push(`/UserPage/${user.userId}/${userId}`)
        }
      }} > <img src={user.img} className='w-full cursor-pointer h-1/2'></img>  </div>        }
        <div className='w-full h-1/2'>

            <div className='w-full h-1/2 '>


                    <div className='w-full h-1/2 flex items-center justify-around'>
                            <p className='text-xl font-bold' >{user.userName}</p>
                    </div>


                    <div className='w-full h-1/2 flex items-center justify-around'>
                        <p className='text-lg font-semibold'>Friends:{user.friends}</p>
                        <p className='text-lg font-semibold'>Follows:{user.follows}</p>
                        <p className='text-lg font-semibold'>Followers:{user.followers}</p>
                    </div>

            </div>

            <div className='w-full h-1/2'>
    
                    <div className='w-full h-1/2 flex items-center justify-around'>
                        <p className='text-lg font-semibold'>KOKOT</p>
                        <p className='text-lg font-semibold'>Posts: {user.posts}</p>
                        <p className='text-lg font-semibold'>Tweets: {user.tweets}</p>
                  </div>


                 <div className='w-full h-1/2 flex items-center justify-around'>
                    <ShowFollowersModalUnfollowBtn followData={followData} followerId={user.userId} setFollowData={setFollowData} userId={userId}/>
                 </div>


            </div>

        </div>
        
    </div>  
  )
}

export default ShowFollowersModalUser