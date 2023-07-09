/*import React, {useRef} from 'react';
import { Loader } from "@googlemaps/js-api-loader"

import key from './api-key.json'; 

const Apikey = key['api-key'];

export function Map() {
     const loader = new Loader({
        apiKey: `${Apikey}`,
        version: "weekly",
        // something additional options
      });
    
    loader.load().then(() => {
        const geocoder = new google.maps.Geocoder();
        
        geocoder.geocode({ address: "東京都千代田区" }, (results, status) => {
          if (status == "OK" && results![0].geometry?.location !== undefined) {
            console.log(results![0].geometry?.location);
          }
        });

        let map: google.maps.Map; 
        const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};

        function initMap(): React.FC {
        map =  new google.maps.Map(document.getElementById("map") as HTMLElement, {
            center,
            zoom: 8
        });

        const para = document.createElement('map');
        para.innerHTML = map;

        return(map);
        }

        const ReactHTMLelement: React.FC = () => {
            return(
                initMap();
            )
        }        
      });

    return(
        <React.Fragment>
            <React.Component>
                
            </React.Component>    
        </React.Fragment>
    )
}*/

import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const [position, setPosition] = useState({
    lat: 35.32428414114691,
    lng: 138.86903111219146,
  });
  const [zoom, setZoom] = useState(15);

  return (
    <div>
      <MapContainer center={position} zoom={zoom} style={{ height: "50vh" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            宿泊先：国立青少年交流の家です
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
