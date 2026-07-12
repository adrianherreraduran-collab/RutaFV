import { useEffect, useMemo, useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const inicial = [
  {
    id: 1,
    matricula: "1234-KLM",
    marca: "Renault",
    modelo: "Kangoo",
    conductor: "Pedro Hernández",
    capacidad: "800 kg",
    estado: "Disponible",
    itv: "2027-02-15",
    seguro: "2027-01-10",
  },
  {
    id: 2,
    matricula: "5678-MNP",
    marca: "Ford",
    modelo: "Transit",
    conductor: "Luis García",
    capacidad: "1200 kg",
    estado: "En ruta",
    itv: "2026-12-20",
    seguro: "2026-11-15",
  },
];

export default function Vehicles() {
  const [buscar, setBuscar] = useState("");
  const [editando, setEditando] = useState(null);

  const [form, setForm] = useState({
    matricula: "",
    marca: "",
    modelo: "",
    conductor: "",
    capacidad: "",
    estado: "Disponible",
    itv: "",
    seguro: "",
  });

  const [vehiculos, setVehiculos] = useState(() => {
    const data = localStorage.getItem("rutafv-vehicles");
    return data ? JSON.parse(data) : inicial;
  });

  useEffect(() => {
    localStorage.setItem(
      "rutafv-vehicles",
      JSON.stringify(vehiculos)
    );
  }, [vehiculos]);

  const lista = useMemo(() => {
    return vehiculos.filter((v) =>
      (
        v.matricula +
        v.marca +
        v.modelo +
        v.conductor
      )
        .toLowerCase()
        .includes(buscar.toLowerCase())
    );
  }, [buscar, vehiculos]);

  function cambiar(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function guardar() {
    if (!form.matricula.trim()) return;

    if (editando) {
      setVehiculos((prev) =>
        prev.map((v) =>
          v.id === editando ? { ...v, ...form } : v
        )
      );
    } else {
      setVehiculos((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    cancelar();
  }

  function editar(v) {
    setEditando(v.id);
    setForm(v);
  }

  function eliminar(id) {
    if (!window.confirm("Eliminar vehículo?")) return;

    setVehiculos((prev) =>
      prev.filter((v) => v.id !== id)
    );
  }

  function cancelar() {
    setEditando(null);

    setForm({
      matricula: "",
      marca: "",
      modelo: "",
      conductor: "",
      capacidad: "",
      estado: "Disponible",
      itv: "",
      seguro: "",
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
          <h2>Vehículos</h2>

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

            <input name="matricula" placeholder="Matrícula" value={form.matricula} onChange={cambiar} />
            <input name="marca" placeholder="Marca" value={form.marca} onChange={cambiar} />
            <input name="modelo" placeholder="Modelo" value={form.modelo} onChange={cambiar} />
            <input name="conductor" placeholder="Conductor" value={form.conductor} onChange={cambiar} />
            <input name="capacidad" placeholder="Capacidad" value={form.capacidad} onChange={cambiar} />
            <input name="itv" type="date" value={form.itv} onChange={cambiar} />
            <input name="seguro" type="date" value={form.seguro} onChange={cambiar} />

            <select
              name="estado"
              value={form.estado}
              onChange={cambiar}
            >
              <option>Disponible</option>
              <option>En ruta</option>
              <option>Mantenimiento</option>
            </select>

          </div>

          <div style={{display:"flex",gap:10,marginTop:20}}>

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
              <th>Matrícula</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Conductor</th>
              <th>Estado</th>
              <th>ITV</th>
              <th>Seguro</th>
              <th></th>
            </tr>

          </thead>

          <tbody>

            {lista.map((v)=>(
              <tr key={v.id}>
                <td>{v.matricula}</td>
                <td>{v.marca}</td>
                <td>{v.modelo}</td>
                <td>{v.conductor}</td>
                <td>{v.estado}</td>
                <td>{v.itv}</td>
                <td>{v.seguro}</td>
                <td>
                  <button onClick={()=>editar(v)}>Editar</button>
                  <button onClick={()=>eliminar(v.id)}>Eliminar</button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </main>
    </div>
  );
}