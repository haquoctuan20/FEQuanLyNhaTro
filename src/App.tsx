import { ROUTES, ROUTES_PUBLIC } from 'constants/router';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<PrivateRoute>{route.component}</PrivateRoute>}
            />
          ))}

          {ROUTES_PUBLIC.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}

          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
