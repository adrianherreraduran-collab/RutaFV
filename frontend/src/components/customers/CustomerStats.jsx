export default function CustomerStats({ clientes }) {
  const total = clientes.length;

  const activos = clientes.filter(
    (c) => c.estado !== "Inactivo"
  ).length;

  const pedidos = clientes.reduce(
    (acc, c) => acc + (c.totalPedidos || 0),
    0
  );

  const facturacion = clientes.reduce(
    (acc, c) => acc + (c.totalFacturado || 0),
    0
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        marginBottom: "25px",
      }}
    >
      <div className="card">
        <h3>{total}</h3>
        <small>Clientes</small>
      </div>

      <div className="card">
        <h3>{activos}</h3>
        <small>Activos</small>
      </div>

      <div className="card">
        <h3>{pedidos}</h3>
        <small>Pedidos</small>
      </div>

      <div className="card">
        <h3>{facturacion.toLocaleString()} €</h3>
        <small>Facturación</small>
      </div>
    </div>
  );
}