"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToString } from "react-dom/server";
import { FaHouseChimney } from "react-icons/fa6";

export default function MapComponent() {
  const position: [number, number] = [49.74764615407407, 19.299495652540074]; // Szczytowa 30 34-321 Łysina, Poland
  const iconHTML = renderToString(<FaHouseChimney color="#0B5644" size={38} />);
  const customIcon = L.divIcon({
    html: iconHTML,
    className: "custom-marker",
    iconAnchor: [16, 32],
  });
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", zIndex: "40" }}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> współtwórcy'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Pieśń Poranka - Odpoczywam W Górach <br /> Szczytowa 30 34-321 Łysina,
          Poland
        </Popup>
      </Marker>
    </MapContainer>
  );
}
