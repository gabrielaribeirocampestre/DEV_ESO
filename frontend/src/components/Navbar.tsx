import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { token, logout } = useAuth();

  return (
    <nav style={{ padding: 20, background: "#222", color: "#fff" }}>
      <Link to="/dashboard" style={{ marginRight: 20, color: "#fff" }}>
        Dashboard
      </Link>

      <Link to="/cosmetics" style={{ marginRight: 20, color: "#fff" }}>
        Cosméticos
      </Link>

      <Link to="/shop" style={{ marginRight: 20, color: "#fff" }}>
        Loja
      </Link>

      {token && (
        <button onClick={logout} style={{ marginLeft: "auto" }}>
          Sair
        </button>
      )}
    </nav>
  );
}
