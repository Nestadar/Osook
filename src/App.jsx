import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./Index.scss";

import Homepage from "./components/Pages/Homepage.jsx";
import Publier from "./components/Pages/Publier";
import Favoris from "./components/Pages/Favoris";
import Messages from "./components/Pages/Messages";
import Profil from "./components/Pages/Profil";
import TestAnimation from "./components/TestAnimation"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/publier" element={<Publier />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/TestAnim" element={<TestAnimation />} />
      </Routes>
    </Router>
  );
}

export default App;
