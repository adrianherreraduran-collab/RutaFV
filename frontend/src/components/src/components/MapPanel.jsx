import { useEffect, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const coordenadas = {
  "Gran Tarajal": [28.2077, -14.0214],
  "Las Playitas": [28.2318, -13.9898],
  "Caleta de Fuste": [28.3966, -13.8576],
  "Puerto del Rosario": [28.5004, -13.8627],
  Corralejo: [28.7316, -13.8675],
};

function FlyToLocation({ location }) {
  const map = useMap();

  useEffect(() => {
    if (!location) return;

    console.log(location);
const pos = coordenadas[location];

    if (pos) {
      map.flyTo(pos, 13, {
        animate: true,
        duration: 1.2,
      });
    }
  }, [location, map]);

  return null;
}

export default function MapPanel({ selectedLocation }) {
  const pedidos = JSON.parse(
    localStorage.getItem("rutafv-pedidos") || "[]"
  );

  const marcadores = useMemo(() => {
    return pedidos
      .map((p) => ({
        ...p,
        posicion: coordenadas[p.direccion],
      }))
      .filter((p) => p.posicion);
  }, [pedidos]);

  return (
    <section className="map-card">
      <div className="card-title">
        Mapa de repartos
      </div>

      <MapContainer
        center={[28.3927, -14.0302]}
        zoom={10}
        className="leaflet-map"
      >
        <FlyToLocation location={selectedLocation} />

        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {marcadores.map((pedido) => (
          <Marker
            key={pedido.id}
            position={pedido.posicion}
          >
            <Popup>
              <strong>{pedido.cliente}</strong>
              <br />
              {pedido.direccion}
              <br />
              {pedido.estado}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}