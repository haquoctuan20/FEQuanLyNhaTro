import { ROUTES, ROUTES_PUBLIC } from 'constants/router';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';

function App() {
  const subDomain = window.location.host.split('.')[0];

  return (
    <div className="App">
      <BrowserRouter>
        {subDomain === 'admin' ? (
          <Routes>
            <Route path="/" element={<Navigate to={'/bangdieukhien'} />} />

            {ROUTES.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}

            {/* {ROUTES.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<PrivateRoute>{route.component}</PrivateRoute>}
            />
          ))} */}

            <Route path="/login" element={<LoginPage />} />
          </Routes>
        ) : (
          <Routes>
            {ROUTES_PUBLIC.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}

            <Route path="/*" element={<>Not found page</>} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
