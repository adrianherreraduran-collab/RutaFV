import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Drivers from "./pages/Drivers";
import Vehicles from "./pages/Vehicles";
import Customers from "./pages/Customers";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/repartos" element={<Orders />} />
      <Route path="/conductores" element={<Drivers />} />
      <Route path="/vehiculos" element={<Vehicles />} />
      <Route path="/clientes" element={<Customers />} />
    </Routes>
  );
}