import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";

const puntos = {
  "Gran Tarajal": [28.2122, -14.0219],
  "Caleta de Fuste": [28.3958, -13.8577],
  "Las Playitas": [28.2315, -13.9895],
};

function CenterMap({ destino }) {
  const map = useMap();

  useEffect(() => {
    if (destino && puntos[destino]) {
      map.flyTo(puntos[destino], 13, {
        duration: 1.5,
      });
    }
  }, [destino, map]);

  return null;
}

function SelectedPopup({ destino, refs }) {
  useEffect(() => {
    if (!destino) return;

    const marker = refs.current[destino];

    if (marker) {
      marker.openPopup();
    }
  }, [destino, refs]);

  return null;
}

export default function MapPanel({ destino }) {
  const markerRefs = useRef({});

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
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <CenterMap destino={destino} />

        <SelectedPopup
          destino={destino}
          refs={markerRefs}
        />

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {Object.entries(puntos).map(([nombre, coords]) => (
          <Marker
            key={nombre}
            position={coords}
            ref={(ref) => {
              if (ref) {
                markerRefs.current[nombre] = ref;
              }
            }}
          >
            <Popup>
              <strong>{nombre}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}