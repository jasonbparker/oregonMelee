import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Events from "./components/Events";
import PowerRankings from "./components/PowerRankings";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <div className="mainBody">
                <Outlet />
              </div>
            </div>
          }
        >
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/power-rankings" element={<PowerRankings />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
