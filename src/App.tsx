import { Button } from 'antd';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BangDieuKhien from './pages/BangDieuKhien';

function App() {
  const subDomain = window.location.host.split('.')[0];

  return (
    <div className="App">
      {subDomain === 'admin' ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BangDieuKhien />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>user</>}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
