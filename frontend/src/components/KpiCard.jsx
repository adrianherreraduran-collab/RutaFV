import {
  FaBox,
  FaClock,
  FaTruck,
  FaCircleCheck,
  FaArrowTrendUp,
} from "react-icons/fa6";

const icons = {
  Pedidos: <FaBox size={22} />,
  Pendientes: <FaClock size={22} />,
  "En ruta": <FaTruck size={22} />,
  Entregados: <FaCircleCheck size={22} />,
};

const colors = {
  Pedidos: "#2563eb",
  Pendientes: "#f59e0b",
  "En ruta": "#0ea5e9",
  Entregados: "#16a34a",
};

export default function KpiCard({ titulo, valor }) {
  return (
    <article className="kpi">
      <div className="kpi-top">
        <div
          className="kpi-icon"
          style={{
            background: colors[titulo] || "#2563eb",
            color: "#fff",
            width: 48,
            height: 48,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icons[titulo] || <FaBox size={22} />}
        </div>

        <div className="kpi-trend">
          <FaArrowTrendUp size={14} />
          <span style={{ marginLeft: 6 }}>+12%</span>
        </div>
      </div>

      <small>{titulo}</small>

      <h2>{valor}</h2>
    </article>
  );
}