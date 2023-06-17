'use client';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import PegawaiIndex from './pages/pegawai/Index';
import PegawaiCreate from './pages/pegawai/Create';
import PegawaiEdit from './pages/pegawai/Edit';
import PelangganIndex from './pages/pelanggan/Index';
import PelangganCreate from './pages/pelanggan/Create';
import PelangganEdit from './pages/pelanggan/Edit';
import MakananIndex from './pages/makanan/Index';
import MakananCreate from './pages/makanan/Create';
import MakananEdit from './pages/makanan/Edit';
import MinumanIndex from './pages/minuman/Index';
import MinumanCreate from './pages/minuman/Create';
import MinumanEdit from './pages/minuman/Edit';

export default function Home() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/pegawai" element={<PegawaiIndex/>} />
        <Route path="/pegawai/create" element={<PegawaiCreate/>} />
        <Route path="/pegawai/edit/:id" element={<PegawaiEdit/>} />
        <Route path="/pelanggan" element={<PelangganIndex/>} />
        <Route path="/pelanggan/create" element={<PelangganCreate/>} />
        <Route path="/pelanggan/edit/:id" element={<PelangganEdit/>} />
        <Route path="/makanan" element={<MakananIndex/>} />
        <Route path="/makanan/create" element={<MakananCreate/>} />
        <Route path="/makanan/edit/:id" element={<MakananEdit/>} />
        <Route path="/minuman" element={<MinumanIndex/>} />
        <Route path="/minuman/create" element={<MinumanCreate/>} />
        <Route path="/minuman/edit/:id" element={<MinumanEdit/>} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}
