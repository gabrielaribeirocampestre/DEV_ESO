import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cosmetics from "./pages/Cosmetics";
import Shop from "./pages/Shop";
import ProtectedRoute from "./components/ProtectedRoute";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}
