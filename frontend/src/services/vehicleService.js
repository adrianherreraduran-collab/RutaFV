const STORAGE_KEY = "rutafv-vehicles";

export function getVehicles() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveVehicles(vehicles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
}

export function addVehicle(vehicle) {
  const vehicles = getVehicles();

  vehicles.push({
    id: Date.now(),
    estado: "Disponible",
    fechaAlta: new Date().toISOString(),
    ...vehicle,
  });

  saveVehicles(vehicles);

  return vehicles;
}

export function updateVehicle(id, vehicle) {
  const vehicles = getVehicles().map((v) =>
    v.id === id ? { ...v, ...vehicle } : v
  );

  saveVehicles(vehicles);

  return vehicles;
}

export function deleteVehicle(id) {
  const vehicles = getVehicles().filter(
    (v) => v.id !== id
  );

  saveVehicles(vehicles);

  return vehicles;
}