// components/MapComponent.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";

// Custom icon (żółta pinezka)
// const customIcon = new L.Icon({
//   iconUrl: "/marker-icon-yellow.png",
//   iconSize: [32, 48],
//   iconAnchor: [16, 48],
// });

export default function MapComponent() {
  const position: [number, number] = [54.038, 21.764]; // współrzędne Giżycka (Mazury)

  return (
    <MapContainer
    //   center={position}
    //   zoom={13}
    //   scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> współtwórcy'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}
    //    icon={customIcon}
    >

        <Popup>
          Sailor Merry Resort <br /> ul. Mazurska 12, Giżycko
        </Popup>
      </Marker>
    </MapContainer>
  );
}
