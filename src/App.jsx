import { useState } from "react";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import CompetitionDetails from "./pages/CompetitionDetails";
import CompetitionPost from "./pages/CompetitionPost";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions/:id" element={<CompetitionDetails />} />
          <Route path="/postCompetition" element={<CompetitionPost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
