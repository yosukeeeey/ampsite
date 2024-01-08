import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import AppBarLife from './Components/Header/AppBarLife';
import { Pin } from './ChurchMaps';

interface MapProps {
  pins: Pin[];
}

const ChurchMapComponent: React.FC<MapProps> = ({ pins }) => {
  // const [selectedPin, setSelectedPin] = React.useState<Pin | null>(null);

  // const mapContainerStyle = {
  //   height: '500px',
  //   width: '100%',
  // };

  // const center = {
  //   lat: 35.6895,
  //   lng: 139.6917,
  // }; 

  return (
    <div>
      <div className="header" style={{ height: "auto" }}>
        <AppBarLife flag={false} />
      </div> 
      <div className="churchMap-body" style={{marginTop: "64px"}}>
        <h2 style={{textAlign: "center", padding: "1% 1%"}}>Our Church</h2>
        {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={6}>
            {pins.map((pin) => (
              <Marker
                key={pin.id}
                position={pin.position}
                onClick={() => setSelectedPin(pin)}
              />
            ))}

            {selectedPin && (
              <InfoWindow
                position={selectedPin.position}
                onCloseClick={() => setSelectedPin(null)}
              >
                <div>
                  <h2>{selectedPin.name}</h2>
                  <p><strong>住所:</strong> {selectedPin.address}</p>
                  <p><strong>電話番号:</strong> {selectedPin.phoneNumber}</p>
                  <p><strong>URL:</strong> <a href={selectedPin.url} target="_blank" rel="noopener noreferrer">{selectedPin.url}</a></p>
                  <p><strong>Instagram:</strong> {selectedPin.instagram}</p>
                  <p><strong>その他:</strong> {selectedPin.otherInfo}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript> */}
        <MapContainer center={[35.6895, 139.6917]} zoom={5} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {pins.map((pin) => (
            <Marker key={pin.id} position={pin.position}>
              <Popup>
                <div>
                  <h2>{pin.name}</h2>
                  <h3>{pin.nickname}</h3>
                  <p>
                    <strong>住所:</strong>{' '}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pin.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pin.address}
                    </a>
                  </p>
                  <p><strong>電話番号:</strong> {pin.phoneNumber}</p>
                  <p><strong>URL:</strong> <a href={pin.url} target="_blank" rel="noopener noreferrer">{pin.url}</a></p>
                  <p><strong>Instagram:</strong> {pin.instagram}</p>
                  <p><strong>その他:</strong> {pin.otherInfo}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

      </div>
      
    </div>
    
  );
};

export default ChurchMapComponent;
