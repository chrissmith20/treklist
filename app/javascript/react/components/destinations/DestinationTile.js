import React from 'react'

const DestinationTile = (props) => {
  return(
    <div className='form-tile'>
      <div className='text-center'>
        <h1 id='location'>{props.location}</h1>
        <h2 id='description'>{props.description}</h2>
    </div>
  </div>
  )
}

export default DestinationTile;
