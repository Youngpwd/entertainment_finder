import { Container } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav/SimpleBottomNavigation";
import Trending from "./routes/Trending/Trending";
import Movies from "./routes/Movies/Movies";
import Series from "./routes/Series/Series";
import Search from "./routes/Search/Search";
import PageNotFound from "./routes/PageNotFound/PageNotFound";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
