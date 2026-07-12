return (
  <div className="layout">
    <Sidebar />
import CustomerStats from "../components/customers/CustomerStats";
import SearchCustomer from "../components/customers/SearchCustomer";
    <main>
      <Header />

      <CustomerStats clientes={clientes} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <h2>Clientes</h2>

        <div style={{ width: "350px" }}>
          <SearchCustomer
            value={buscar}
            onChange={setBuscar}
          />
        </div>
      </div>

      <div className="card">

        <div className="grid">

          <input
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={cambiar}
          />

          ...