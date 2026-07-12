const STORAGE_KEY = "rutafv-pedidos";

export function getOrders() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

export function addOrder(order) {
  const orders = getOrders();

  orders.push({
    id: Date.now(),
    ...order,
  });

  saveOrders(orders);

  return orders;
}

export function updateOrder(id, order) {
  const orders = getOrders().map((o) =>
    o.id === id ? { ...o, ...order } : o
  );

  saveOrders(orders);

  return orders;
}

export function deleteOrder(id) {
  const orders = getOrders().filter(
    (o) => o.id !== id
  );

  saveOrders(orders);

  return orders;
}