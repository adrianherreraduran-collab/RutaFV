export default function StatusBadge({ estado }) {
  const colores = {
    Pendiente: "#f59e0b",
    "En ruta": "#2563eb",
    Entregado: "#16a34a",
    Cancelado: "#dc2626",
  };

  return (
    <span
      style={{
        background: colores[estado] || "#64748b",
        color: "white",
        padding: "6px 12px",
        borderRadius: 20,
        fontWeight: 600,
        fontSize: 13,
        display: "inline-block",
        minWidth: 95,
        textAlign: "center",
      }}
    >
      {estado}
    </span>
  );
}