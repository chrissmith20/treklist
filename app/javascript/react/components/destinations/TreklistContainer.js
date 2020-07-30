import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import DestinationTile from './DestinationTile'
import DestinationForm from './DestinationForm'
import TreklistMap from './TreklistMap'


const TreklistContainer = () => {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
      fetch(`/api/v1/destinations`)
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
          location={destination.location}
          description={destination.description}
        />
      )
    })

    const addNewDestination = formPayload => {
      fetch(`/api/v1/destinations`, {
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
        setDestinations([...destinations, submitDestination])
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
    let loadingElement = <div style={{ height: `75px` }} />
    let containerElement = <div style={{ height: `50px` }} />
    let mapElement = <div style={{ height: `800px`, width: `100%`, float: `right` }} />

  return(
    <>
        <TreklistMap
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyArHw2cFpooL6LryK0VR1A83O0v5hSeBIk&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={loadingElement}
          containerElement={containerElement}
          mapElement={mapElement}
          destinations={destinations}
          addNewDestination={addNewDestination}
        />

      {destinationTiles}

      <DestinationForm
      destinations={destinations}
      addNewDestination={addNewDestination}
      />
    </>
  )
}

export default TreklistContainer;
