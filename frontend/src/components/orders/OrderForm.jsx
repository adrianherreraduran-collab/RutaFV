import { useEffect, useState } from "react";

export default function OrderForm({
  guardar,
  cancelar,
  pedido = null,
}) {
  const [nuevo, setNuevo] = useState({
    cliente: "",
    telefono: "",
    direccion: "",
    fecha: "",
    hora: "",
    prioridad: "Media",
    observaciones: "",
  });

  useEffect(() => {
    if (pedido) {
      setNuevo({
        cliente: pedido.cliente || "",
        telefono: pedido.telefono || "",
        direccion: pedido.direccion || "",
        fecha: pedido.fecha || "",
        hora: pedido.hora || "",
        prioridad: pedido.prioridad || "Media",
        observaciones: pedido.observaciones || "",
      });
    }
  }, [pedido]);

  function enviar(e) {
    e.preventDefault();

    if (!nuevo.cliente || !nuevo.direccion) {
      alert("Cliente y dirección obligatorios.");
      return;
    }

    guardar(nuevo);

    setNuevo({
      cliente: "",
      telefono: "",
      direccion: "",
      fecha: "",
      hora: "",
      prioridad: "Media",
      observaciones: "",
    });
  }

  return (
    <form
      onSubmit={enviar}
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 25,
        marginBottom: 25,
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
      }}
    >
      <h3>
        {pedido ? "Editar reparto" : "Nuevo reparto"}
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 20,
        }}
      >
        <input
          placeholder="Cliente"
          value={nuevo.cliente}
          onChange={(e) =>
            setNuevo({
              ...nuevo,
              cliente: e.target.value,
            })
          }
        />

        <input
          placeholder="Teléfono"
          value={nuevo.telefono}
          onChange={(e) =>
            setNuevo({
              ...nuevo,
              telefono: e.target.value,
            })
          }
        />

        <input
          placeholder="Dirección"
          value={nuevo.direccion}
          onChange={(e) =>
            setNuevo({
              ...nuevo,
              direccion: e.target.value,
            })
          }
        />

        <input
          type="date"
          value={nuevo.fecha}
          onChange={(e) =>
            setNuevo({
              ...nuevo,
              fecha: e.target.value,
            })
          }
        />

        <input
          type="time"
          value={nuevo.hora}
          onChange={(e) =>
            setNuevo({
              ...nuevo,
              hora: e.target.value,
            })
          }
        />

        <select
          value={nuevo.prioridad}
          onChange={(e) =>
            setNuevo({
              ...nuevo,
              prioridad: e.target.value,
            })
          }
        >
          <option>Baja</option>
          <option>Media</option>
          <option>Alta</option>
        </select>

        <textarea
          placeholder="Observaciones"
          value={nuevo.observaciones}
          onChange={(e) =>
            setNuevo({
              ...nuevo,
              observaciones: e.target.value,
            })
          }
          style={{
            gridColumn: "1 / 3",
            minHeight: 100,
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 10,
          marginTop: 25,
        }}
      >
        <button
          type="button"
          className="new-order-btn"
          style={{
            background: "#64748b",
          }}
          onClick={cancelar}
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="new-order-btn"
        >
          {pedido ? "Actualizar" : "Guardar"}
        </button>
      </div>
    </form>
  );
}