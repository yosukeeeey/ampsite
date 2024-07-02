/**
 * Mapを描画する(Leafret, React-Leafret)
 */

import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';


let DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [20,30],
    iconAnchor: [12,36]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const [position, setPosition] = useState({
    lat: 35.32328414114691,
    lng: 138.86903111219146,
  });
  const [zoom, setZoom] = useState(15);

  return (
    <div>
      <MapContainer center={position} zoom={zoom} style={{ height: "30vh" }}>
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