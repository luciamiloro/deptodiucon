import React from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  // 📍 Coordenadas de San Martín y Perito Moreno, Esquel
  const center = [-42.915900, -71.321950];

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg z-0">
      <MapContainer center={center} zoom={15} className="w-full h-full">
        {/* Capa del mapa */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {/* Círculo de radio 300 metros */}
        <Circle
          center={center}
          radius={300}
          pathOptions={{
            color: "yellow", // Borde del círculo
            fillColor: "yellow", // Color de relleno
            fillOpacity: 0.3, // Opacidad del relleno
          }}
        />
      </MapContainer>
    </div>
  );
};

export default MapView;
