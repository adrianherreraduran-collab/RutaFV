import { useEffect, useMemo, useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const inicial = [
  {
    id: 1,
    nombre: "Pedro Hernández",
    telefono: "600111111",
    email: "pedro@rutafv.com",
    vehiculo: "Furgón 1",
    estado: "Disponible",
  },
  {
    id: 2,
    nombre: "Luis García",
    telefono: "600222222",
    email: "luis@rutafv.com",
    vehiculo: "Furgón 2",
    estado: "En ruta",
  },
];

export default function Drivers() {
  const [buscar, setBuscar] = useState("");
  const [editando, setEditando] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    vehiculo: "",
    estado: "Disponible",
  });

  const [drivers, setDrivers] = useState(() => {
    const data = localStorage.getItem("rutafv-drivers");
    return data ? JSON.parse(data) : inicial;
  });

  useEffect(() => {
    localStorage.setItem(
      "rutafv-drivers",
      JSON.stringify(drivers)
    );
  }, [drivers]);

  const lista = useMemo(() => {
    return drivers.filter((d) =>
      (
        d.nombre +
        d.telefono +
        d.vehiculo +
        d.email
      )
        .toLowerCase()
        .includes(buscar.toLowerCase())
    );
  }, [buscar, drivers]);

  function cambiar(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function guardar() {
    if (!form.nombre.trim()) return;

    if (editando) {
      setDrivers((prev) =>
        prev.map((d) =>
          d.id === editando
            ? {
                ...d,
                ...form,
              }
            : d
        )
      );
    } else {
      setDrivers((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    cancelar();
  }

  function editar(driver) {
    setEditando(driver.id);
    setForm(driver);
  }

  function eliminar(id) {
    if (!window.confirm("Eliminar conductor?")) return;

    setDrivers((prev) =>
      prev.filter((d) => d.id !== id)
    );
  }

  function cancelar() {
    setEditando(null);

    setForm({
      nombre: "",
      telefono: "",
      email: "",
      vehiculo: "",
      estado: "Disponible",
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
          <h2>Conductores</h2>

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
              name="vehiculo"
              placeholder="Vehículo"
              value={form.vehiculo}
              onChange={cambiar}
            />

            <select
              name="estado"
              value={form.estado}
              onChange={cambiar}
            >
              <option>Disponible</option>
              <option>En ruta</option>
              <option>Descanso</option>
            </select>

          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 20,
            }}
          >
            <button onClick={guardar}>
              {editando
                ? "Actualizar"
                : "Guardar"}
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
              <th>Vehículo</th>
              <th>Estado</th>
              <th></th>
            </tr>

          </thead>

          <tbody>

            {lista.map((d) => (

              <tr key={d.id}>

                <td>{d.nombre}</td>

                <td>{d.telefono}</td>

                <td>{d.email}</td>

                <td>{d.vehiculo}</td>

                <td>{d.estado}</td>

                <td>

                  <button
                    onClick={() =>
                      editar(d)
                    }
                  >
                    Editar
                  </button>

                  <button
                    onClick={() =>
                      eliminar(d.id)
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