import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.scss";
import Homepage from "./components/Pages/Homepage.jsx";
import Publier from "./components/Pages/Publier";
import Favoris from "./components/Pages/Favoris";
import Messages from "./components/Pages/Messages";
import Profil from "./components/Pages/Profil";

function App() {
  return (
    <Router>
      <Routes>
        <div>Yolo App</div>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/publier" element={<Publier />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;
