import React from 'react';

const PhotoGrid = ({photoUrls}) => {
  
  return (
    <div className="photo-box">
      <img className="big-photo-left" src={photoUrls[0]} /> 
      <div className="photos">
        <img className="photo-up-1" src={photoUrls[1]} />
        <img className="photo-down-1" src={photoUrls[2]} />
      </div>
      <div className="photos">
        <img className="photo-up-2" src={photoUrls[3]} />
        <img className="photo-down-2" src={photoUrls[4]} />
      </div>
    </div>
  )
}

export default PhotoGrid;