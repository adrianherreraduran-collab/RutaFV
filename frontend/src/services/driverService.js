const STORAGE_KEY = "rutafv-drivers";

export function getDrivers() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveDrivers(drivers) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(drivers));
}

export function addDriver(driver) {
  const drivers = getDrivers();

  drivers.push({
    id: Date.now(),
    estado: "Disponible",
    fechaAlta: new Date().toISOString(),
    ...driver,
  });

  saveDrivers(drivers);

  return drivers;
}

export function updateDriver(id, driver) {
  const drivers = getDrivers().map((d) =>
    d.id === id ? { ...d, ...driver } : d
  );

  saveDrivers(drivers);

  return drivers;
}

export function deleteDriver(id) {
  const drivers = getDrivers().filter(
    (d) => d.id !== id
  );

  saveDrivers(drivers);

  return drivers;
}