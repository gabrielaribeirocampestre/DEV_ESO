import { createContext, useState, useEffect } from "react";
import { api, setAuthToken } from "../api/api";

export const AuthContext = createContext({
  user: null,
  token: null,
  login: async (email: string, password: string) => {},
  logout: () => {},
});

export function AuthProvider({ children }: any) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  async function login(email: string, password: string) {
    const { data } = await api.post("/auth/login", { email, password });

    localStorage.setItem("token", data.token);
    setToken(data.token);
    setUser(data.user);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
