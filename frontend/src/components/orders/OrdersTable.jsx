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
          <th>Estado</th>
          <th>Conductor</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {pedidos.length === 0 ? (
          <tr>
            <td
              colSpan="5"
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

              <td>
                <select
                  value={pedido.estado}
                  onChange={(e) =>
                    cambiarEstado(
                      pedido.id,
                      e.target.value
                    )
                  }
                  style={{
                    padding: 8,
                    borderRadius: 8,
                    border: "1px solid #ddd",
                  }}
                >
                  <option>Pendiente</option>
                  <option>En ruta</option>
                  <option>Entregado</option>
                  <option>Cancelado</option>
                </select>

                <div style={{ marginTop: 8 }}>
                  <StatusBadge estado={pedido.estado} />
                </div>
              </td>

              <td>{pedido.conductor}</td>

              <td>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                  }}
                >
                  <button
                    onClick={() => editar(pedido)}
                    style={{
                      background: "#2563eb",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "8px 12px",
                      cursor: "pointer",
                    }}
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() => eliminar(pedido.id)}
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "8px 12px",
                      cursor: "pointer",
                    }}
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