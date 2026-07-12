import { useEffect, useMemo, useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import OrderForm from "../components/orders/OrderForm";
import OrdersTable from "../components/orders/OrdersTable";
import SearchBar from "../components/orders/SearchBar";

const pedidosIniciales = [
  {
    id: 1,
    cliente: "Juan Pérez",
    direccion: "Gran Tarajal",
    telefono: "",
    fecha: "",
    hora: "",
    prioridad: "Media",
    observaciones: "",
    estado: "Pendiente",
    conductor: "Pedro",
  },
  {
    id: 2,
    cliente: "Hotel Playitas",
    direccion: "Las Playitas",
    telefono: "",
    fecha: "",
    hora: "",
    prioridad: "Alta",
    observaciones: "",
    estado: "En ruta",
    conductor: "Luis",
  },
  {
    id: 3,
    cliente: "María López",
    direccion: "Caleta de Fuste",
    telefono: "",
    fecha: "",
    hora: "",
    prioridad: "Baja",
    observaciones: "",
    estado: "Entregado",
    conductor: "Ana",
  },
];

export default function Orders() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [buscar, setBuscar] = useState("");
  const [pedidoEditando, setPedidoEditando] = useState(null);

  const [pedidos, setPedidos] = useState(() => {
    const guardados = localStorage.getItem("rutafv-pedidos");
    return guardados ? JSON.parse(guardados) : pedidosIniciales;
  });

  useEffect(() => {
    localStorage.setItem(
      "rutafv-pedidos",
      JSON.stringify(pedidos)
    );
  }, [pedidos]);

  const pedidosFiltrados = useMemo(() => {
    return pedidos.filter((pedido) =>
      (pedido.cliente + " " + pedido.direccion)
        .toLowerCase()
        .includes(buscar.toLowerCase())
    );
  }, [buscar, pedidos]);

  function nuevoReparto() {
    setPedidoEditando(null);
    setMostrarFormulario(true);
  }

  function guardarPedido(datos) {
    if (pedidoEditando) {
      setPedidos((prev) =>
        prev.map((p) =>
          p.id === pedidoEditando.id
            ? {
                ...p,
                ...datos,
              }
            : p
        )
      );
    } else {
      setPedidos((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...datos,
          estado: "Pendiente",
          conductor: "-",
        },
      ]);
    }

    setPedidoEditando(null);
    setMostrarFormulario(false);
  }

  function eliminarPedido(id) {
    if (!window.confirm("¿Eliminar este reparto?")) return;

    setPedidos((prev) => prev.filter((p) => p.id !== id));
  }

  function editarPedido(pedido) {
    setPedidoEditando(pedido);
    setMostrarFormulario(true);
  }

  function cambiarEstado(id, estado) {
    setPedidos((prev) =>
      prev.map((pedido) =>
        pedido.id === id
          ? {
              ...pedido,
              estado,
            }
          : pedido
      )
    );
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
            alignItems: "center",
            margin: "20px 0 30px",
          }}
        >
          <h2>Repartos</h2>

          <button
            className="new-order-btn"
            onClick={nuevoReparto}
          >
            + Nuevo reparto
          </button>
        </div>

        <SearchBar
          valor={buscar}
          cambiar={setBuscar}
        />

        {mostrarFormulario && (
          <OrderForm
            pedido={pedidoEditando}
            guardar={guardarPedido}
            cancelar={() => {
              setPedidoEditando(null);
              setMostrarFormulario(false);
            }}
          />
        )}

        <OrdersTable
          pedidos={pedidosFiltrados}
          eliminar={eliminarPedido}
          editar={editarPedido}
          cambiarEstado={cambiarEstado}
        />
      </main>
    </div>
  );
}