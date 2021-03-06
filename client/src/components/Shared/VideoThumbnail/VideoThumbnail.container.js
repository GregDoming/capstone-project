import React, { useState } from 'react'
import VideoThumbnail from './VideoThumbnail'

export default function VideoThumbnailContainer({video: {thumbnail, title, link, id, user}}) {
  const [displayPlayButton, setDisplayPlayButton] = useState(false)
 
  const handleOnMouseEnter = () => {
    setDisplayPlayButton(true)
  }

  const handleOnMouseLeave = () => {
    setDisplayPlayButton(false)
  }
  return (
      <VideoThumbnail id={id} hovered={displayPlayButton} onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter} user={user} link={link} text={title} background={thumbnail} />
  )
}
