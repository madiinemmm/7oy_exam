import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
import "./App.css";
import Layout from "./layout/Layout";
import SeeProduct from "./pages/SeeProduct";
import Checkout from "./pages/Checkout";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphone";


function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token") && window.location.pathname !== "/register") {
      navigate("/login");
    }
  }, []);

  function ProtectedRoute({ children, redirectTo = "/login", isAuthenticated }) {
    if (!isAuthenticated) {
      navigate(redirectTo);
      return null;
    }
    return children;
  }

  return (
    <div className="container">
           <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute isAuthenticated={token ? true : false} redirectTo="/login">
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/pages/checkout"
        element={
          <ProtectedRoute isAuthenticated={token ? true : false} redirectTo="/login">
            <Layout>
              <Checkout />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/pages/headphones" // Headphones page route
        element={
          <ProtectedRoute isAuthenticated={token ? true : false} redirectTo="/login">
            <Layout>
              <Headphones />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/pages/speakers" // Speakers page route
        element={
          <ProtectedRoute isAuthenticated={token ? true : false} redirectTo="/login">
            <Layout>
              <Speakers />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/pages/earphones" // Earphones page route
        element={
          <ProtectedRoute isAuthenticated={token ? true : false} redirectTo="/login">
            <Layout>
              <Earphones />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/pages/:page/:id"
        element={
          <ProtectedRoute isAuthenticated={token ? true : false} redirectTo="/login">
            <Layout>
              <SeeProduct />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Error />} />
    </Routes>
    </div>

  );
}

export default App;
