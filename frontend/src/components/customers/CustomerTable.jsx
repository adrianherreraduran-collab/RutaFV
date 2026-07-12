export default function CustomerTable({
  clientes,
  onEdit,
  onDelete,
}) {
  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Dirección</th>
          <th style={{ width: "170px" }}>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {clientes.map((c) => (
          <tr key={c.id}>
            <td>{c.nombre}</td>
            <td>{c.telefono}</td>
            <td>{c.email}</td>
            <td>{c.direccion}</td>

            <td
              style={{
                display: "flex",
                gap: "8px",
              }}
            >
              <button onClick={() => onEdit(c)}>
                Editar
              </button>

              <button onClick={() => onDelete(c.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}