"use client"
import { faArrowRight,faGear, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useContext,useEffect,useRef} from 'react'
import { mainContext } from '@/models';
import axios from 'axios';
import { Tweet, TweetComment, User } from '@prisma/client';
import TweetModalCreateComment from './TweetModalCreateComment';
import TweetModalComment from './TweetModalComment';
import TweetModalLike from './TweetModalLike';
import Link from 'next/link';
  


interface props{user:User}

function TweetModal({user}:props) {  
  const {Tweet} = useContext(mainContext)
  const {story} = useContext(mainContext)
  const {setStory} = useContext(mainContext)
  const {setShowModalTweet} = useContext(mainContext)
  const {setTweet} = useContext(mainContext)
  const {showModalTweet} = useContext(mainContext)
  const [comments,setComments] = useState<TweetComment[]>()
  const [totalComments,setTotalComments] = useState<number | undefined>(0)
  const [totalLikes,setTotalLikes] = useState<number | undefined>(0)
  const handleCloseModal = () => {
    setShowModalTweet(false);
    if(story)
    {
      setStory(false)
      setTweet(undefined)
    }

  };
  useEffect(()=>{
    setComments(Tweet?.tweetComments)
    setTotalComments(Tweet?.tweetComments.length)
    setTotalLikes(Tweet?.tweet.tweet.likes.length)
  },[Tweet])


    useEffect(()=>{
      setTotalComments(Tweet?.tweetComments.length)
      setTotalLikes(Tweet?.tweet.tweet.likes.length)
      if(story)
      {
          setTimeout(() => {
          setStory(false);
          setShowModalTweet(false);
          setTweet(undefined)
        }, 11000);
      }
    },[story])


  return (
          <div>
    
      {showModalTweet && (
        <div className="modal-overlay" onClick={handleCloseModal}>

                  <div className="TweetModal " onClick={(e) => e.stopPropagation()}>

                  { story &&         <div className='progress w-full '>
                                <div className='progress-value'></div>
                              </div>}

                  <div className='w-full h-full flex'>

                        <div className={story ?'flex w-full postModalHeight' :'flex w-full h-full' }>
                                <p className='w-full h-full p-2  font-semibold text-lg flex items-start justify-center '>{Tweet?.tweet.tweet.description}</p>
                        </div>
                      <div className={story ?'w-1/3 border-l-2 border-black postModalHeight' :'w-1/3 border-l-2 border-black h-full' }>


                        <div className='w-full h-14 border-b-2 flex justify-between items-center border-black'>
                                    <Link href={user.id === Tweet?.tweet.tweet.userId ?`/ProfilePage/${user.id}`:`/UserPage/${Tweet?.tweet.tweet.userId}/${user.id}`}className='w-36 flex items-center justify-around h-full'>
                                      {Tweet?.tweet.user.img && <img src={Tweet?.tweet.user.img} className='w-11  h-11 rounded-full'></img>}
                                      <p className='text-xs font-semibold'>{Tweet?.tweet.user.userName}</p>
                                    </Link>

                                    <div className='w-16 flex items-center justify-center h-full'>
                                      <p className='text-xs font-semibold'>{Tweet?.tweet.tweet.theme} Theme</p>
                                    </div>

                                    <div className='w-16 flex items-center justify-between h-full'>
                                      <FontAwesomeIcon  className='w-5 h-6 text-black mx-5 hvr-pop cursor-pointer'  icon={faGear} />
                                    </div>

                        </div>
                              
                        <div className='w-full h-4/6 modalCommentScroll  border-b-2 border-black'>

                        {comments && comments.map((comment)=>{
                            return <TweetModalComment userId={user.id} comment={comment}/>
                          }) }

                        </div>


                              
                        <div className='w-full h-20'>
                        <div className='h-10 mt-2 p-5 flex justify-start items-center'>
                              <p className='text-lg'> <span className='font-semibold  text-xl'>{Tweet?.tweet.user.userName}:</span>  {Tweet?.tweet.tweet.description}</p> 
                        </div>
                          <div className='w-full h-20 flex justify-around items-center '>
                            <p className='text-xs font-medium '>Total Comments: <span className='text-sm font-semibold'>{totalComments}</span></p>
                            <p className='text-xs font-medium'>Total Likes: <span className='text-sm font-semibold'>{totalLikes}</span></p>
                          </div>

                                {!story &&<TweetModalLike/>      }
                              {!story &&<TweetModalCreateComment user={user} />      }


                        </div>



                      </div>
                  </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default TweetModal