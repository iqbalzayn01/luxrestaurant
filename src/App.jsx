import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
