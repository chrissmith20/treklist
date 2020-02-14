import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


const TreklistMap = withScriptjs(withGoogleMap((props) => {
  return(
    <>
    <div>
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>

    </div>
    </>
  )
}))

export default TreklistMap;
