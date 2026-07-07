import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const puntos = {
  "Gran Tarajal": [28.2122, -14.0219],
  "Caleta de Fuste": [28.3958, -13.8577],
  "Las Playitas": [28.2315, -13.9895],
};

function CenterMap({ destino }) {
  const map = useMap();

  useEffect(() => {
    if (destino && puntos[destino]) {
      map.flyTo(puntos[destino], 12, {
        duration: 1.5,
      });
    }
  }, [destino, map]);

  return null;
}

export default function MapPanel({ destino }) {
  return (
    <div
      style={{
        height: "100%",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={[28.3587, -14.0537]}
        zoom={10}
        style={{ height: "100%", width: "100%" }}
      >
        <CenterMap destino={destino} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {Object.entries(puntos).map(([nombre, coords]) => (
          <Marker key={nombre} position={coords}>
            <Popup>{nombre}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}