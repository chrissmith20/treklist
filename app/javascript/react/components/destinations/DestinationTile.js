import React from 'react'

const DestinationTile = (props) => {
  return(
    <div>
      <h1 id='title'>{props.title}</h1>
      <h2 id='description'>{props.description}</h2>
    </div>
  )
}

export default DestinationTile;
