export default function OrdersPanel({
  pedidos = [],
  onSelect,
}) {
  const pendientes = pedidos.filter(
    (p) => p.estado !== "Entregado"
  );

  return (
    <div className="orders-panel">
      <h3>Pedidos pendientes ({pendientes.length})</h3>

      {pendientes.length === 0 ? (
        <p>No hay pedidos.</p>
      ) : (
        pendientes.map((pedido) => (
          <div
            key={pedido.id}
            className="order-card"
            style={{ cursor: "pointer" }}
            onClick={() => onSelect?.(pedido.direccion)}
          >
            <strong>{pedido.cliente}</strong>

            <p>{pedido.direccion}</p>

            <small>{pedido.estado}</small>
          </div>
        ))
      )}
    </div>
  );
}