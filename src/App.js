import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewProducts from "./components/ViewProducts";
import Home from "./components/Home";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<ViewProducts />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
