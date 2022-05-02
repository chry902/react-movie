import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";


import { Home } from "./Pages/Home/Home";
import { AddMovie } from "./Pages/AddMovie/AddMovie";
import { EditMomvie } from "./Pages/EditMovie/editmovie";
import { Alert } from "./components/Alert/alert";

function App() {



  const [alert, setAlert] = useState("");



  const editSuccess = (componentiNonUtilizati) => {
    setAlert(componentiNonUtilizati);
    console.log("--->app.jsx", componentiNonUtilizati)
  };
  console.log("--->>>app", alert);
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
        <Alert alert={alert} />
        <Routes>
          <Route path="/edit-movie/:id" element={<EditMomvie />} />
          <Route path="/add-movie" element={<AddMovie editSuccess={editSuccess} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;