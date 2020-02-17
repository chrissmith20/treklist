import React from 'react'
import ReactDOM from 'react-dom'

import DestinationList from './DestinationList'
import DestinationForm from './DestinationForm'
import TreklistMap from './TreklistMap'


const TreklistContainer = () => {
  return(
    <>
    <TreklistMap
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyArHw2cFpooL6LryK0VR1A83O0v5hSeBIk&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100px` }} />}
      containerElement={<div style={{ height: `100px` }} />}
      mapElement={<div style={{ height: `800px`, width: `100%`, float: `right` }} />}
    />

  <DestinationList  />

  <DestinationForm />
  </>
  )
}




export default TreklistContainer;
