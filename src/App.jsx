import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";


import { Home } from "./Pages/Home/Home";
import { AddMovie } from "./Pages/AddMovie/AddMovie";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div>logo</div>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/add-movie">CreateCardForm</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;