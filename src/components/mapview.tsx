import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import 'leaflet/dist/leaflet.css';

const MapView: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.covid);

  const center: LatLngExpression = [20.5937, 78.9629];

  return (
    <MapContainer
      center={center}
      zoom={5}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((state) => (
        <CircleMarker
          key={state.name}
          center={state.name === 'Maharashtra' ? [19.7515, 75.7139] : state.name === 'Kerala' ? [10.1632, 76.6413] : [15.3173, 75.7139]}
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
