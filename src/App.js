import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DashboardAdmin from "./Pages/DashboardAdmin";
import ProdukAdmin from "./Pages/ProdukAdmin";
import AboutAdmin from "./Pages/AboutAdmin";
import Pengguna from "./Pages/Pengguna";
import PerluDikirim from "./Pages/PerluDikirim";
import Dikirim from "./Pages/Dikirim";
import RincianDikirim from "./Pages/RincianDikirim";
import PesananBatal from "./Pages/PesananBatal";
import PesananBerhasil from "./Pages/PesananBerhasil";
import MenungguPembayaran from "./Pages/MenungguPembayaran";
import EditUser from "./Pages/EditUser";
import EditAdmin from "./Pages/EditAdmin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard-admin" element={<DashboardAdmin />}></Route>
        <Route path="/produk-admin" element={<ProdukAdmin />}></Route>
        <Route path="/about-admin" element={<AboutAdmin />}></Route>
        <Route path="/pengguna" element={<Pengguna />}></Route>
        <Route path="/perlu-dikirim" element={<PerluDikirim />}></Route>
        <Route path="/dikirim" element={<Dikirim />}></Route>
        <Route path="/rincian-dikirim" element={<RincianDikirim />}></Route>
        <Route path="/pesanan-batal" element={<PesananBatal />}></Route>
        <Route path="/pesanan-berhasil" element={<PesananBerhasil />}></Route>
        <Route path="/menunggu-pembayaran" element={<MenungguPembayaran />}></Route>
        <Route path="/edit-user" element={<EditUser />}></Route>
        <Route path="/edit-admin" element={<EditAdmin />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
