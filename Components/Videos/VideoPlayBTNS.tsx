import { faArrowCircleLeft, faArrowCircleRight, faPauseCircle, faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface props{
    currentVideoIndex: number
    playPreviousVideo: () => void
    playNextVideo: () => void
    Play:boolean
    setPlay: React.Dispatch<React.SetStateAction<boolean>>
}

function VideoPlayBTNS({setPlay,Play,currentVideoIndex,playNextVideo,playPreviousVideo}:props) {
  return (
    <div className="w-full h-1/5  pt-10   ">
        <div className='w-full h-1/2 flex justify-around items-start'> 
            {currentVideoIndex > 0  ? (
            <FontAwesomeIcon
                className="w-14 hvr-pop cursor-pointer h-14 text-white"
                icon={faArrowCircleLeft}
                onClick={playPreviousVideo}
            />
            ) : (
            <div className="w-14"></div>
            )}
            <FontAwesomeIcon
            onClick={playNextVideo}
            className="w-14 hvr-pop cursor-pointer  h-14 text-white"
            icon={faArrowCircleRight}
            />
        </div>

        <div className='w-full h-1/2 flex items-start justify-center'>

        <FontAwesomeIcon onClick={()=>{setPlay(!Play)}}   className="w-14 hvr-pop cursor-pointer h-14 text-white" icon={Play?faPauseCircle: faPlayCircle}
            />
        </div>

    </div>
  )
}

export default VideoPlayBTNS