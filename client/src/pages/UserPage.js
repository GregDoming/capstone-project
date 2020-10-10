import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams} from "react-router";
import { getVideosByOwner } from '../store/video/video-actions';

export default function UserPage() {  
    const dispatch = useDispatch();
    const history = useHistory();
    let { id } = useParams();
    console.log(id)

    useEffect(() => {
        dispatch(getVideosByOwner(id))
      }, [dispatch])
    
      const videos = useSelector(state => state.videos)
      console.log(videos)
      if (!videos) return null
    return (
    <>
    <h1>User Page</h1>
    </>
  )
}