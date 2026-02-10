import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpenseForm from "./pages/ExpenseForm";
import ExpenseList from "./pages/ExpenseList";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <h2>Expense Tracker</h2>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ExpenseList />} />
            <Route path="/add" element={<ExpenseForm />} />
            <Route path="/edit/:id" element={<ExpenseForm />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
