import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const checkUser = async () => {
    try {
      const res = await axios.get("/api/v1/auth/me", { withCredentials: true });
      setUser(res.data.user);
      setAuthError(null);
    } catch {
      setUser(null);
    }
  };

  const signup = async (name, email, password) => {
    try {
      const res = await axios.post(
        "/api/v1/auth/signup",
        { name, email, password },
        {
          withCredentials: true,
        }
      );
      // console.log(res.data);
      setUser(res.data.user);
      setAuthError(null);
    } catch (err) {
      setAuthError(err.response?.data?.message || "Signup Failed");
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        "/api/v1/auth/login",
        { email, password },
        {
          withCredentials: true,
        }
      );
      setUser(res.data.user);
      setAuthError(null);
    } catch (err) {
      setAuthError(err.response?.data?.message || "Login failed");
    }
  };

  const logout = async () => {
    await axios.post("/api/v1/auth/logout", {}, { withCredentials: true });
    setUser(null);
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, authError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
