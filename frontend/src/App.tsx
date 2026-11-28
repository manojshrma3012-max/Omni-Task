
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import { useEffect } from "react";
import { serviceurl } from "./main";
import axios from "axios";
import { useUserStore } from "./store/userstore";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import Integrations from "./pages/Integrations";
import CreateAgents from "./pages/CreateAgents";

function App() {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const {data} = await axios.get(`${serviceurl}/api/auth/get-user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data.user);
        console.log("User is already logged in with token:", token);
      }
    };
    void fetchUser();
  }, []);
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/agents" element={user ? <Agents /> : <Navigate to="/login" />} />
        <Route path="/integration" element={user ? <Integrations /> : <Navigate to="/login" />} />
        <Route path="/agent/new" element={user ? <CreateAgents /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App