import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const MapView = () => {
  const { data } = useSelector((state: RootState) => state.covid);

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((state) => (
        <CircleMarker
          key={state.name}
          center={[state.name === 'Maharashtra' ? 19.7515 : 15.3173, state.name === 'Maharashtra' ? 75.7139 : 75.7139]} // Example coords
          radius={Math.sqrt(state.totalCases) * 0.1}
          color="red"
        >
          <Popup>
            {state.name}: {state.totalCases} cases
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default MapView;
