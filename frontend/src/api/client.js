const API_BASE = "http://localhost:8000/api/v1";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail || `Request failed: ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

export const expenseApi = {
  list: (category) =>
    request(`/expenses/${category ? `?category=${encodeURIComponent(category)}` : ""}`),
  get: (id) => request(`/expenses/${id}`),
  create: (data) => request("/expenses/", { method: "POST", body: JSON.stringify(data) }),
  update: (id, data) =>
    request(`/expenses/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  delete: (id) => request(`/expenses/${id}`, { method: "DELETE" }),
};
