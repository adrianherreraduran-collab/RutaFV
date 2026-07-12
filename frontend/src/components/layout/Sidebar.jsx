import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    { icon: "🏠", text: "Panel", path: "/" },
    { icon: "📦", text: "Repartos", path: "/repartos" },
    { icon: "🚚", text: "Rutas", path: "/rutas" },
    { icon: "👨‍💼", text: "Conductores", path: "/conductores" },
    { icon: "🚐", text: "Vehículos", path: "/vehiculos" },
    { icon: "👥", text: "Clientes", path: "/clientes" },
    { icon: "📊", text: "Estadísticas", path: "/estadisticas" },
    { icon: "⚙️", text: "Configuración", path: "/configuracion" },
  ];

  return (
    <aside className="sidebar">
      <div>
        <div className="logo">
          <div className="logo-icon">R</div>

          <div>
            <h1>RutaFV</h1>
            <span>Gerente de flota</span>
          </div>
        </div>

        <nav>
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <span>{item.icon}</span>
              {item.text}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="status"></div>

        <div>
          <strong>Sistema online</strong>
          <small>Backend desconectado</small>
        </div>
      </div>
    </aside>
  );
}