const STORAGE_KEY = "rutafv-customers";

export function getCustomers() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveCustomers(customers) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(customers)
  );
}

export function addCustomer(customer) {
  const customers = getCustomers();

  const nuevo = {
    id: Date.now(),
    fechaAlta: new Date().toISOString(),
    estado: "Activo",
    totalPedidos: 0,
    totalFacturado: 0,
    ...customer,
  };

  customers.push(nuevo);

  saveCustomers(customers);

  return customers;
}

export function updateCustomer(id, customer) {
  const customers = getCustomers().map((c) =>
    c.id === id ? { ...c, ...customer } : c
  );

  saveCustomers(customers);

  return customers;
}

export function deleteCustomer(id) {
  const customers = getCustomers().filter(
    (c) => c.id !== id
  );

  saveCustomers(customers);

  return customers;
}