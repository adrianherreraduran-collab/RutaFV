import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import KpiCard from "../components/KpiCard";

export default function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />

      <main>

        <Header />

        <section className="grid">
          <KpiCard titulo="Pedidos" valor="37" />
          <KpiCard titulo="Clientes" valor="148" />
          <KpiCard titulo="Vehículos" valor="1" />
          <KpiCard titulo="Facturación" valor="2.540 €" />
        </section>

        <section className="dashboard-content">

          <div className="map-card">

            <div className="card-title">
              🗺️ Mapa en tiempo real
            </div>

            <div className="map-placeholder">
              Aquí irá Leaflet
            </div>

          </div>

          <aside className="orders-card">

            <h3>Repartos activos</h3>

            <div className="order">

              <div>
                <strong>Hotel Costa Azul</strong>
                <span>08:30</span>
              </div>

              <small className="ok">
                En ruta
              </small>

            </div>

            <div className="order">

              <div>
                <strong>Villa Paradise</strong>
                <span>09:10</span>
              </div>

              <small className="warning">
                Pendiente
              </small>

            </div>

            <div className="order">

              <div>
                <strong>Apartamento Sol</strong>
                <span>10:00</span>
              </div>

              <small className="done">
                Entregado
              </small>

            </div>

          </aside>

        </section>

      </main>
    </div>
  );
}