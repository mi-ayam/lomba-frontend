import { useState } from "react";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import CompetitionDetails from "./pages/Competition/CompetitionDetails";
import CompetitionEdit from "./pages/Competition/CompetitionEdit";
import CompetitionPost from "./pages/Competition/CompetitionPost";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions/:id" element={<CompetitionDetails />} />
          <Route path="/postCompetition" element={<CompetitionPost />} />
          <Route path="/editCompetition/:id" element={<CompetitionEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
