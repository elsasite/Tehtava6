import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Urheilijat from "./components/Urheilijatiedot";
import Ylatunniste from "./components/Ylatunniste.js";
import Tietoa from "./components/pages/Tietoa";
import LisaaUrheilija from "./components/LisaaUrheilija";
import MuokkaaUrheilija from "./components/MuokkaaUrheilija";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <Ylatunniste />
        <div className="container">
          <Routes>
            <Route path="/" element={<Urheilijat />} />
            <Route path="/urheilija/lisaa" element={<LisaaUrheilija />} />
            <Route
              path="/urheilija/muokkaa/:id"
              element={<MuokkaaUrheilija />}
            />
            <Route path="/tietoa" element={<Tietoa />} />
          </Routes>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
