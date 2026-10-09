import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Eventos from "../pages/Eventos/Eventos";
import DetalhesEventos from "../pages/DetalhesEventos/DetalhesEventos";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Eventos" element={<Eventos />} />
      <Route path="/Eventos" element={<DetalhesEventos/>} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default AppRoutes;