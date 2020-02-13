import React, { useEffect, useState } from 'react';
import DestinationTile from './DestinationTile'


const DestinationList = (props) => {
  const [destinations, setDestination] = useState([])

  useEffect(() => {
      fetch(`/api/v1/destinations.json`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
            throw(error)
        }
      })
      .then(response => response.json())
      .then(response => {
        setDestination(response)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }, [])

    const destinationTiles = destinations.map(destination => {
      return(
        <DestinationTile
          key={destination.id}
          title={destination.title}
          description={destination.description}
        />
      )
    })

  return(
    <div>
      {destinationTiles}
    </div>
  )
}

export default DestinationList;
