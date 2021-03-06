import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getVideos, getPopularVideos, getRecentVideos, getNeedVideos } from '../../store/video/video-actions'
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner'
import VideoSection from '../Shared/VideoSection/VideoSection'
import VideoThumbnailContainer from '../Shared/VideoThumbnail/VideoThumbnail.container'
export default function HomepageGuestContainer() {

  const dispatch = useDispatch()
  const { videos } = useSelector(state => state)
  // state.videos.popularVideos
  // state.videos.recentVideos
  // state.videos.needVideos
  console.log(videos)
  let loading = false
  if (!videos.popularVideos || !videos.recentVideos || !videos.needVideos){
    loading = true
  } else {
    loading = false
  }

  useEffect(() => {
    // dispatch(getVideos())
    dispatch(getPopularVideos())
    dispatch(getRecentVideos())
    dispatch(getNeedVideos())
  }, [])

  if(loading) {
    return <LoadingSpinner />
  }



  return (
    <div>
        <VideoSection key={"Popular Videos"} sectionTitle="Popular Videos" videos={videos.popularVideos} />
        <VideoSection key={"Recent Videos"} sectionTitle="Recent videos" videos={videos.recentVideos} />
        <VideoSection key={"Support these Videos"} sectionTitle="People that need your support" videos={videos.needVideos} />
    </div>
  )
}
