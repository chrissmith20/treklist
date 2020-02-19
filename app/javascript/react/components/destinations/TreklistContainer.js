import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import DestinationTile from './DestinationTile'
import DestinationForm from './DestinationForm'
import TreklistMap from './TreklistMap'


const TreklistContainer = () => {
  const [destinations, setDestinations] = useState([])

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
        setDestinations(response)
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

    const addNewDestination = formPayload => {
      fetch(`/api/v1/destinations/`, {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(formPayload),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(submitDestination => {
        setDestination([...destinations, submitDestination])
      })
    }
    let loadingElement = <div style={{ height: `100px` }} />

  return(
    <>
      <TreklistMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyArHw2cFpooL6LryK0VR1A83O0v5hSeBIk&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={loadingElement}
        containerElement={<div style={{ height: `100px` }} />}
        mapElement={<div style={{ height: `800px`, width: `100%`, float: `right` }} />}
        destinations={destinations}
      />

      {destinationTiles}

      <DestinationForm addNewDestination={addNewDestination}
      />
    </>
  )
}

export default TreklistContainer;
