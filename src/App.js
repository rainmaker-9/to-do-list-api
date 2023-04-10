import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewProducts from "./components/ViewProducts";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ViewProducts />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
