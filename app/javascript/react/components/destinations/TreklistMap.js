import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const TreklistMap = withScriptjs(withGoogleMap((props) => {

  return(
    <>
    <div>
      <GoogleMap defaultZoom={5} defaultCenter={{ lat: 42.3601, lng: -71.0589 }}>

        <Marker position={{ lat: 42.3601, lng: -71.0589  }} />

      </GoogleMap>
    </div>
   </>
  )
}))

export default TreklistMap;
