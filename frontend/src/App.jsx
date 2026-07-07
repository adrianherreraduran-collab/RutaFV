import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/repartos" element={<Orders />} />
    </Routes>
  );
}