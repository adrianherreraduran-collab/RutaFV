import StatusBadge from "./StatusBadge";

export default function OrdersTable({
  pedidos,
  eliminar,
  editar,
  cambiarEstado,
}) {
  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Dirección</th>
          <th>Conductor</th>
          <th>Estado</th>
          <th>Prioridad</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {pedidos.length === 0 ? (
          <tr>
            <td
              colSpan="6"
              style={{
                textAlign: "center",
                padding: 40,
                color: "#64748b",
              }}
            >
              No hay repartos registrados.
            </td>
          </tr>
        ) : (
          pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.cliente}</td>

              <td>{pedido.direccion}</td>

              <td>{pedido.conductor || "-"}</td>

              <td>
                <select
                  value={pedido.estado}
                  onChange={(e) =>
                    cambiarEstado(
                      pedido.id,
                      e.target.value
                    )
                  }
                >
                  <option>Pendiente</option>
                  <option>En ruta</option>
                  <option>Entregado</option>
                  <option>Cancelado</option>
                </select>

                <div style={{ marginTop: 6 }}>
                  <StatusBadge estado={pedido.estado} />
                </div>
              </td>

              <td>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: 20,
                    background:
                      pedido.prioridad === "Alta"
                        ? "#ef4444"
                        : pedido.prioridad === "Media"
                        ? "#f59e0b"
                        : "#22c55e",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 12,
                  }}
                >
                  {pedido.prioridad}
                </span>
              </td>

              <td>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                  }}
                >
                  <button onClick={() => editar(pedido)}>
                    ✏️
                  </button>

                  <button
                    onClick={() =>
                      eliminar(pedido.id)
                    }
                  >
                    🗑
                  </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}