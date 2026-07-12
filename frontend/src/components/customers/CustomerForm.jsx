export default function CustomerForm({
  form,
  editando,
  onChange,
  onSave,
  onCancel,
}) {
  return (
    <div className="card">
      <div className="grid">
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={onChange}
        />

        <input
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={onChange}
        />

        <input
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={onChange}
        />

        <input
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={onChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button onClick={onSave}>
          {editando ? "Actualizar" : "Guardar"}
        </button>

        {editando && (
          <button onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </div>
  );
}