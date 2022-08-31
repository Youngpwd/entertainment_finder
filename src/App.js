import { Container } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav/SimpleBottomNavigation";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Container>
          <Routes>
            <Route />
            <Route />
            <Route />
            <Route />
            <Route path="*" element={<pageNotFound />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
