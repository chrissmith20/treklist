import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox"

const TreklistMap = withScriptjs(withGoogleMap((props) => {
  // debugger


  // const userMarkers = props.destinations.map((destination) => {
  //   let trekMarker = <Marker position={{ lat: destination.latitude, lng: destination.longitude }} />
  // //
  //   return(
  //     <GoogleMap>
  //       {trekMarker}
  //     </GoogleMap>
  //   )
  // })

  //
  // const onPlacesChanged = () => {
  //   const places = refs.searchBox.getPlaces();
  //   const bounds = new google.maps.LatLngBounds();
  //
  //   places.forEach(place => {
  //     if (place.geometry.viewport) {
  //       bounds.union(place.geometry.viewport)
  //     } else {
  //       bounds.extend(place.geometry.location)
  //     }
  //   });


  // onPlacesChanged={onPlacesChanged}
  return(
    <>
    <div>
      <GoogleMap defaultZoom={5} defaultCenter={{ lat: 42.3601, lng: -71.0589 }}>

        <Marker position={{ lat: 42.3601, lng: -71.0589  }} />

      </GoogleMap>

      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        controlPosition={google.maps.ControlPosition.TOP_LEFT}
      >
        <input
          type="text"
          placeholder="Search your next Trek"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            marginTop: `27px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
          }}
        />
      </SearchBox>
    </div>
   </>
  )
}))

export default TreklistMap;
