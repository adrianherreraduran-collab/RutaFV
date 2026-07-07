import { useEffect, useMemo, useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const inicial = [
  {
    id: 1,
    nombre: "Juan Pérez",
    telefono: "600123123",
    email: "juan@email.com",
    direccion: "Gran Tarajal",
  },
  {
    id: 2,
    nombre: "Hotel Playitas",
    telefono: "928111111",
    email: "recepcion@playitas.com",
    direccion: "Las Playitas",
  },
];

export default function Customers() {
  const [buscar, setBuscar] = useState("");
  const [editando, setEditando] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
  });

  const [clientes, setClientes] = useState(() => {
    const data = localStorage.getItem("rutafv-customers");
    return data ? JSON.parse(data) : inicial;
  });

  useEffect(() => {
    localStorage.setItem(
      "rutafv-customers",
      JSON.stringify(clientes)
    );
  }, [clientes]);

  const lista = useMemo(() => {
    return clientes.filter((c) =>
      (
        c.nombre +
        c.telefono +
        c.email +
        c.direccion
      )
        .toLowerCase()
        .includes(buscar.toLowerCase())
    );
  }, [buscar, clientes]);

  function cambiar(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function guardar() {
    if (!form.nombre.trim()) return;

    if (editando) {
      setClientes((prev) =>
        prev.map((c) =>
          c.id === editando ? { ...c, ...form } : c
        )
      );
    } else {
      setClientes((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    cancelar();
  }

  function editar(cliente) {
    setEditando(cliente.id);
    setForm(cliente);
  }

  function eliminar(id) {
    if (!window.confirm("Eliminar cliente?")) return;

    setClientes((prev) =>
      prev.filter((c) => c.id !== id)
    );
  }

  function cancelar() {
    setEditando(null);

    setForm({
      nombre: "",
      telefono: "",
      email: "",
      direccion: "",
    });
  }

  return (
    <div className="layout">
      <Sidebar />

      <main>
        <Header />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <h2>Clientes</h2>

          <input
            placeholder="Buscar..."
            value={buscar}
            onChange={(e) =>
              setBuscar(e.target.value)
            }
          />
        </div>

        <div className="card">
          <div className="grid">

            <input
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={cambiar}
            />

            <input
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={cambiar}
            />

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={cambiar}
            />

            <input
              name="direccion"
              placeholder="Dirección"
              value={form.direccion}
              onChange={cambiar}
            />

          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 20,
            }}
          >
            <button onClick={guardar}>
              {editando ? "Actualizar" : "Guardar"}
            </button>

            {editando && (
              <button onClick={cancelar}>
                Cancelar
              </button>
            )}
          </div>
        </div>

        <table className="orders-table">

          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Dirección</th>
              <th></th>
            </tr>
          </thead>

          <tbody>

            {lista.map((c) => (
              <tr key={c.id}>

                <td>{c.nombre}</td>
                <td>{c.telefono}</td>
                <td>{c.email}</td>
                <td>{c.direccion}</td>

                <td>

                  <button
                    onClick={() => editar(c)}
                  >
                    Editar
                  </button>

                  <button
                    onClick={() =>
                      eliminar(c.id)
                    }
                  >
                    Eliminar
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </main>
    </div>
  );
}