import React from 'react'
import Data from './Data.json'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from "@react-google-maps/api";
import { useDisclosure } from '@chakra-ui/react';
import MarkerinfoModal from './MarkerinfoModal';
import { useState } from 'react';



const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 13.0827,
  lng: 80.2707
};

function MyComponent() {
  const [propdata, setpropdata] = useState({})
  const { isOpen, onOpen,onClose} = useDisclosure();

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyAkZEEYr7f9GW_63YQB6GuJA5rqnij7_JA"
    })

    function loadmodal(item) {
        console.log("clicked")
        console.log(item)
        setpropdata(item)
        onOpen()
    }
  
    // const [map, setMap] = React.useState(null)
    // console.log(map)
  
    // const onLoad = React.useCallback(function callback(map) {
    //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //   const bounds = new window.google.maps.LatLngBounds(center);
    //   map.fitBounds(bounds);
  
    //   setMap(map)
    // }, [])
  
    // const onUnmount = React.useCallback(function callback(map) {
    //   setMap(null)
    // }, [])
  
    return isLoaded ? (
        
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          //   onLoad={onLoad}
          //   onUnmount={onUnmount}
          >

            {Data.map((item) => {
                return (
                    <Marker key={item.id} position={{lat: item.position.lat, lng: item.position.lng}} onClick={() => loadmodal(item)} />
                    
                )
            })}
            <MarkerinfoModal isOpen={isOpen} onClose={onClose} details={propdata} />
          {/* <Marker position={center} onClick={() => loadmodal()} /> */}
          { /* Child components, such as markers, info windows, etc. */ }
          
        </GoogleMap>
    ) : <></>
  }
  
  export default React.memo(MyComponent)