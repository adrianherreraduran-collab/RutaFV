import { useMemo, useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import KpiCard from "../components/KpiCard";
import MapPanel from "../components/MapPanel";
import OrdersPanel from "../components/OrdersPanel";

export default function Dashboard() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const pedidos = JSON.parse(
    localStorage.getItem("rutafv-pedidos") || "[]"
  );

  const estadisticas = useMemo(
    () => ({
      total: pedidos.length,
      pendientes: pedidos.filter(
        (p) => p.estado === "Pendiente"
      ).length,
      ruta: pedidos.filter(
        (p) => p.estado === "En ruta"
      ).length,
      entregados: pedidos.filter(
        (p) => p.estado === "Entregado"
      ).length,
    }),
    [pedidos]
  );

  return (
    <div className="layout">
      <Sidebar />

      <main>
        <Header />

        <section className="grid">
          <KpiCard titulo="Pedidos" valor={estadisticas.total} />
          <KpiCard titulo="Pendientes" valor={estadisticas.pendientes} />
          <KpiCard titulo="En ruta" valor={estadisticas.ruta} />
          <KpiCard titulo="Entregados" valor={estadisticas.entregados} />
        </section>

        <section className="dashboard-content">
          <div className="map-wrapper">
            <MapPanel destino={selectedLocation} />
          </div>

          <OrdersPanel
            pedidos={pedidos}
            onSelect={setSelectedLocation}
          />
        </section>
      </main>
    </div>
  );
}