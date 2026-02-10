import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { expenseApi } from "../api/client";

const CATEGORIES = ["Food", "Transport", "Housing", "Entertainment", "Utilities", "Other"];

export default function ExpenseForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    amount: "",
    category: CATEGORIES[0],
    description: "",
    transaction_date: new Date().toISOString().split("T")[0],
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditing) {
      expenseApi
        .get(id)
        .then((data) =>
          setForm({
            amount: String(data.amount),
            category: data.category,
            description: data.description,
            transaction_date: data.transaction_date,
          })
        )
        .catch((err) => setError(err.message));
    }
  }, [id, isEditing]);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const payload = { ...form, amount: parseFloat(form.amount) };

    try {
      if (isEditing) {
        await expenseApi.update(id, payload);
      } else {
        await expenseApi.create(payload);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>{isEditing ? "Edit Expense" : "Add Expense"}</h1>

      {error && <p className="error">Error: {error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Amount ($)
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            step="0.01"
            min="0.01"
            required
          />
        </label>

        <label>
          Category
          <select name="category" value={form.category} onChange={handleChange}>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <label>
          Description
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            maxLength={255}
          />
        </label>

        <label>
          Date
          <input
            type="date"
            name="transaction_date"
            value={form.transaction_date}
            onChange={handleChange}
            required
          />
        </label>

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : isEditing ? "Update" : "Add Expense"}
          </button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
