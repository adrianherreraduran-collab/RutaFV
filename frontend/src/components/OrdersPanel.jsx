export default function OrdersPanel({
  pedidos = [],
  onSelect,
}) {
  const pendientes = pedidos.filter(
    (p) => p.estado !== "Entregado"
  );

  return (
    <div className="orders-panel">
      <h3>Pedidos</h3>

      {pendientes.length === 0 && (
        <p>No hay pedidos.</p>
      )}

      {pendientes.map((pedido) => (
        <div
          key={pedido.id}
          className="order-card"
          style={{ cursor: "pointer" }}
          onClick={() => {
            console.log("CLICK", pedido.direccion);

            if (onSelect) {
              onSelect(pedido.direccion);
            }
          }}
        >
          <strong>{pedido.cliente}</strong>

          <p>{pedido.direccion}</p>

          <small>
            Estado: {pedido.estado}
          </small>
        </div>
      ))}
    </div>
  );
}