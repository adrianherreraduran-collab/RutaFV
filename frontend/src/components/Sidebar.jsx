import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    { icon: "🏠", text: "Dashboard", path: "/" },
    { icon: "📦", text: "Repartos", path: "/repartos" },
    { icon: "🚚", text: "Rutas", path: "/rutas" },
    { icon: "👨‍💼", text: "Conductores", path: "/conductores" },
    { icon: "🚐", text: "Vehículos", path: "/vehiculos" },
    { icon: "📈", text: "Estadísticas", path: "/estadisticas" },
    { icon: "⚙️", text: "Configuración", path: "/configuracion" },
  ];

  return (
    <aside className="sidebar">
      <div>
        <div className="logo">
          <div className="logo-icon">R</div>

          <div>
            <h1>RutaFV</h1>
            <span>Fleet Manager</span>
          </div>
        </div>

        <nav>
          {menu.map((item) => (
            <NavLink
              key={item.text}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
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