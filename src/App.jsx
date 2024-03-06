import { useState } from "react";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import CompetitionDetails from "./pages/CompetitionDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions/:id" element={<CompetitionDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
