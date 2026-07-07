export default function Header() {
  return (
    <header className="header">

      <div>
        <h2>Dashboard</h2>
        <p>Centro de control de la flota · Hoy</p>
      </div>

      <div className="actions">

        <div className="search">
          🔍
          <input
            type="text"
            placeholder="Buscar pedidos, clientes..."
          />
        </div>

        <button>+ Nuevo reparto</button>

        <div className="notification">
          🔔
          <span></span>
        </div>

        <div className="avatar">
          A
        </div>

      </div>

    </header>
  );
}