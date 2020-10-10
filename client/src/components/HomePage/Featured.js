import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Featured(props) {
  const history = useHistory();
  let videos = props.videos
  function searchID(e) {
      e.preventDefault()
      let id = e.target.id.trim()
      history.push(`/video/${id}`)
  }

return (
  <div className='homeHeader'>
        <div className='homeHeader__leftside'>
          <p id='featuredLabel'>FEATURED PROJECT</p>
          <img className='homeHeader__imgLg' id={videos[0].id} onClick={searchID} src={videos[0].thumbnail} alt='Featured Video'></img>
          <div id='homePageProgess'>
            <div id='progress-container'>
            </div>
          </div>
          <p id='featuredTitle'>
          {videos[0].title}
          </p>
          <p id='featuredDes'>
            {videos[0].description}
          </p>
          <p id='featuredBy'>By {videos[0].user_id}</p>
        </div>
        <div className='homeHeader__rightside'>
          <p id='featuredLabel'>RECOMMENDED FOR YOU</p>
          <div id='topSmallBox' className='homeHeader__smallBoxes'>
            <img className='homeHeader__imgSmall' id={videos[1].id} onClick={searchID} src={videos[1].thumbnail} alt='Recommended Video 1'></img>
            <div>
              <p className='homeHeader__tittle'>{videos[1].title}</p>
              <p className='homeHeader__madeBy'>By {videos[1].user_id}</p>
            </div>
          </div>
          <div className='homeHeader__smallBoxes'>
            <img className='homeHeader__imgSmall' id={videos[2].id} onClick={searchID} src={videos[2].thumbnail} alt='Recommended Video 2'></img>
            <div>
              <p className='homeHeader__tittle'>{videos[2].title}</p>
              <p className='homeHeader__madeBy'>By {videos[2].user_id}</p>
            </div>
          </div>
          <div className='homeHeader__smallBoxes'>
            <img className='homeHeader__imgSmall' id={videos[3].id} onClick={searchID} src={videos[3].thumbnail} alt='Recommended Video 3'></img>
            <div>
              <p className='homeHeader__tittle'>{videos[3].title}</p>
              <p className='homeHeader__madeBy'>By {videos[3].user_id}</p>
            </div>
          </div>           
        </div>
      </div>
  )
}
