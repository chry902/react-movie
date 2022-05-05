
import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

import "./App.css";


// import { Home } from "./Pages/Home/Home";
// import { AddMovie } from "./Pages/AddMovie/AddMovie";
// import { EditMomvie } from "./Pages/EditMovie/editmovie";
import { Alert } from "./components/Alert/alert";
import { Loading } from "./Pages/Loading/loading"

const Home = lazy(() => import("./Pages/Home/Home"));
const AddMovie = lazy(() => import('./Pages/AddMovie/AddMovie'));
const EditMomvie = lazy(() => import('./Pages/EditMovie/editmovie'))



function App() {
  const [alert, setAlert] = useState({});

  const editSuccess = (value) => {
    setAlert(value);
  };


  const timeCallBack = (() => {
    setAlert({
      visible: false,
      content: "",
    });
  });

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
        <Alert alert={alert} timeCallBack={timeCallBack} />

        <Suspense fallback={<Loading />}>
          <Routes>
            {/* <Route path="/edit-movie/:id" element={<Suspense fallback={<Loading />}><EditMomvie editSuccess={editSuccess} /></Suspense>} />
          <Route path="/add-movie" element={<Suspense fallback={<Loading />} ><AddMovie editSuccess={editSuccess} /></Suspense>} />
          <Route path="/" element={<Suspense fallback={<Loading />} ><Home /></Suspense>} /> */}

            <Route path="/edit-movie/:id" element={<EditMomvie editSuccess={editSuccess} />} />
            <Route path="/add-movie" element={<AddMovie editSuccess={editSuccess} />} />
            <Route path="/" element={<Home />} />

          </Routes>
        </Suspense>

      </div>
    </Router>

  );
}

export default App;